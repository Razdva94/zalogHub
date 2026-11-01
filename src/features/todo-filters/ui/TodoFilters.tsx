import type { TodoFilter } from '@/entities'
import { selectFilter, setFilter, useAppDispatch, useAppSelector } from '@/shared'

const options: { id: TodoFilter; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'active', label: 'Активные' },
  { id: 'completed', label: 'Выполненные' },
]

export function TodoFilters() {
  const filter = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()

  return (
    <div className="mt-4 flex gap-2" role="tablist" aria-label="Фильтр задач">
      {options.map((option) => {
        const active = filter === option.id
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => dispatch(setFilter(option.id))}
            className={
              active
                ? 'rounded-full bg-slate-900 px-3 py-1 text-sm text-white'
                : 'rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 hover:bg-slate-200'
            }
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
