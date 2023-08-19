import { twMerge } from 'tailwind-merge'
import { InputPrefixProps, InputControlProps, InputRootProps } from './types'

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

export function Control(props: InputControlProps) {
  return (
    <input
      autoComplete="off"
      className="flex-1 border-0 border-transparent bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none autofill:bg-zinc-800/0 focus-within:ring-0 dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  )
}

export function Root(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'overflow-hidden',
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none dark:border-zinc-700 dark:bg-zinc-800',
        'focus-within:border-orange-300 focus-within:ring-4 focus-within:ring-orange-100 dark:focus-within:border-orange-500 dark:focus-within:ring-orange-500/10',
        props.className,
      )}
      {...props}
    />
  )
}
