import type { Todo, TodoFilter } from '@/entities/todo/model/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface TodosState {
  items: Todo[]
  filter: TodoFilter
}

const initialState: TodosState = {
  items: [],
  filter: 'all',
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const title = action.payload.trim()
      if (!title) return
      state.items.unshift({
        id: crypto.randomUUID(),
        title,
        completed: false,
      })
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((item) => item.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      state.filter = action.payload
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todosSlice.actions
export default todosSlice.reducer
