/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/Button'
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/tmowes.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Julio Cesar Mowes
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          julius@rocketseat.com.br
        </span>
      </div>
      <Button variant="ghost" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
