import { TodoBoard } from '@/widgets'

export function TodoPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col px-4 py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          ZalogHub
        </h1>
        <p className="mt-2 text-slate-500">Список задач</p>
      </header>
      <TodoBoard />
    </main>
  )
}
