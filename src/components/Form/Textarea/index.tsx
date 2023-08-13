import { twMerge } from 'tailwind-merge'
import { TextareaProps } from './types'

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className={twMerge(
        'min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400',
        'focus-visible:border-orange-300 focus-visible:ring-4 focus-visible:ring-orange-100 dark:focus-visible:border-orange-500 dark:focus-visible:ring-orange-500/10',
        props.className,
      )}
      {...props}
    />
  )
}
