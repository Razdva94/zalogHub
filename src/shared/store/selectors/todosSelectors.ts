import type { RootState } from '@/shared/store'

export const selectTodos = (state: RootState) => state.todos.items
export const selectFilter = (state: RootState) => state.todos.filter

export const selectFilteredTodos = (state: RootState) => {
  const { items, filter } = state.todos
  if (filter === 'active') return items.filter((item) => !item.completed)
  if (filter === 'completed') return items.filter((item) => item.completed)
  return items
}

export const selectTodoById = (state: RootState, id: string) =>
  state.todos.items.find((item) => item.id === id)
