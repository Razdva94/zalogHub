import {
  selectFilter,
  selectFilteredTodos,
  selectTodos,
  useAppSelector,
} from '@/shared'
import { TodoItem } from './TodoItem'

export function TodoList() {
  const todos = useAppSelector(selectFilteredTodos)
  const filter = useAppSelector(selectFilter)
  const allTodos = useAppSelector(selectTodos)

  if (todos.length === 0) {
    const message =
      allTodos.length === 0 || filter === 'all'
        ? 'Пока нет задач'
        : 'Нет задач в этом фильтре'

    return <p className="mt-6 text-center text-sm text-slate-400">{message}</p>
  }

  return (
    <ul className="mt-2 divide-y divide-slate-100">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
    </ul>
  )
}
