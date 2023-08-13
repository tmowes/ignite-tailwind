'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import { SelectItemProps } from './types'

export function SelectItem(props: SelectItemProps) {
  const { text } = props
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-orange-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}