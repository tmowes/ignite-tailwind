'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from '../Root'

export function Trigger() {
  const { id } = useFileInput()
  return (
    <label
      htmlFor={id}
      className="hover:bg-orange-25 group flex w-full flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-orange-200 hover:text-orange-500 group-focus-within:border-orange-300 group-focus-within:ring-4 group-focus-within:ring-orange-100
      dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-orange-300 dark:group-focus-within:border-orange-500 dark:group-focus-within:ring-orange-500/10
      "
    >
      <div className="border-6 relative rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-orange-50 group-hover:bg-orange-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-orange-600 dark:text-zinc-500 dark:group-hover:text-orange-300" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-orange-700 dark:text-orange-300">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
