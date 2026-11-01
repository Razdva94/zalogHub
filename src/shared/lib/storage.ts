import type { Todo } from '@/entities/todo/model/types'

const STORAGE_KEY = 'zaloghub-todos'

export function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(isTodo)
  } catch {
    return []
  }
}

export function saveTodos(items: Todo[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

function isTodo(value: unknown): value is Todo {
  if (!value || typeof value !== 'object') return false
  const row = value as Record<string, unknown>
  return (
    typeof row.id === 'string' &&
    typeof row.title === 'string' &&
    typeof row.completed === 'boolean'
  )
}
