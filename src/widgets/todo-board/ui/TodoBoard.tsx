import { TodoList } from '@/entities'
import { AddTodoForm, TodoFilters } from '@/features'

export function TodoBoard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <AddTodoForm />
      <TodoFilters />
      <TodoList />
    </section>
  )
}
