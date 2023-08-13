'use client'

import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { TriggerProps } from './types'

export function Trigger(props: TriggerProps) {
  const { children, ...attrs } = props
  return (
    <Select.Trigger
      {...attrs}
      className={twMerge(
        'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none dark:border-zinc-700 dark:bg-zinc-800',
        'data-[placeholder]:text-zinc-600 dark:data-[placeholder]:text-zinc-400',
        'focus:border-orange-300 focus:ring-4 focus:ring-orange-100 dark:focus:border-orange-500 dark:focus:ring-orange-500/10',
        attrs.className,
      )}
    >
      {children}

      <Select.Icon>
        <ChevronDown className="h-5 w-5 text-zinc-500" />
      </Select.Icon>
    </Select.Trigger>
  )
}
