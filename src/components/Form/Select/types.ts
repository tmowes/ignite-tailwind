import { SelectProps as RadixSelectProps } from '@radix-ui/react-select'

import { ReactNode } from 'react'

export type SelectProps = RadixSelectProps & {
  placeholder: string
  children: ReactNode
}
