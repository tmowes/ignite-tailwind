'use client'

import { ItemText } from '@radix-ui/react-select'
import { ComponentProps, ReactNode } from 'react'

export type ItemTextProps = ComponentProps<typeof ItemText> & {
  children: ReactNode
}
