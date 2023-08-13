'use client'

import * as Select from '@radix-ui/react-select'
import { ValueProps } from './types'

export function Value(props: ValueProps) {
  const { children, ...attrs } = props
  if (!children) {
    return <Select.Value {...attrs} />
  }

  return (
    <Select.Value {...attrs}>
      <span className="flex items-center gap-2 text-black dark:text-zinc-100">
        {children}
      </span>
    </Select.Value>
  )
}
