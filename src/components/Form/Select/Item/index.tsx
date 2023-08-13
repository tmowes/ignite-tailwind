'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { ItemProps } from './types'

export function Item(props: ItemProps) {
  const { children, ...attrs } = props
  return (
    <Select.Item
      className="flex items-center gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50 data-[highlighted]:outline-none dark:data-[highlighted]:bg-zinc-700"
      {...attrs}
    >
      {children}

      <Select.ItemIndicator className="ml-auto">
        <Check className="h-4 w-4 text-orange-500 dark:text-orange-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
