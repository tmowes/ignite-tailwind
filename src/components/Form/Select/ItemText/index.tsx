'use client'

import * as Select from '@radix-ui/react-select'
import { ItemTextProps } from './types'

export function ItemText(props: ItemTextProps) {
  const { children } = props
  return (
    <Select.ItemText asChild>
      <span className="flex items-center gap-2 text-left leading-5 text-black dark:text-zinc-100">
        {children}
      </span>
    </Select.ItemText>
  )
}
