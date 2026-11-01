import { useState, type FormEvent } from 'react'
import { addTodo, useAppDispatch } from '@/shared'

export function AddTodoForm() {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')
  const trimmed = title.trim()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!trimmed) return
    dispatch(addTodo(trimmed))
    setTitle('')
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Новая задача"
        aria-label="Новая задача"
        className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
      />
      <button
        type="submit"
        disabled={!trimmed}
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Добавить
      </button>
    </form>
  )
}
