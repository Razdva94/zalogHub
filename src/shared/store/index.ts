import { configureStore } from '@reduxjs/toolkit'
import { loadTodos, saveTodos } from '@/shared/lib/storage'
import { todosReducer } from './slice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: {
    todos: {
      items: loadTodos(),
      filter: 'all' as const,
    },
  },
})

store.subscribe(() => {
  saveTodos(store.getState().todos.items)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { useAppDispatch, useAppSelector } from './hooks'
export { addTodo, toggleTodo, deleteTodo, setFilter } from './slice'
export {
  selectFilter,
  selectFilteredTodos,
  selectTodoById,
  selectTodos,
} from './selectors'
