import { ComponentProps, ReactNode } from 'react'
import { Root } from '@radix-ui/react-select'

export type RootProps = ComponentProps<typeof Root> & {
  children: ReactNode
}
