import {
  selectTodoById,
  toggleTodo,
  deleteTodo,
  useAppDispatch,
  useAppSelector,
} from '@/shared'

interface TodoItemProps {
  id: string
}

export function TodoItem({ id }: TodoItemProps) {
  const todo = useAppSelector((state) => selectTodoById(state, id))
  const dispatch = useAppDispatch()

  if (!todo) return null

  return (
    <li className="flex items-center gap-3 py-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(id))}
        aria-label={
          todo.completed ? 'Отметить как активную' : 'Отметить как выполненную'
        }
        className="size-4 shrink-0 accent-slate-900"
      />
      <span
        className={
          todo.completed
            ? 'min-w-0 flex-1 text-slate-400 line-through'
            : 'min-w-0 flex-1 text-slate-800'
        }
      >
        {todo.title}
      </span>
      <button
        type="button"
        onClick={() => dispatch(deleteTodo(id))}
        className="shrink-0 text-sm text-slate-500 hover:text-red-600"
      >
        Удалить
      </button>
    </li>
  )
}
