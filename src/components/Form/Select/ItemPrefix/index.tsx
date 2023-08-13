'use client'

import { ItemPrefixProps } from './types'

export function ItemPrefix(props: ItemPrefixProps) {
  const { children } = props
  return <div>{children}</div>
}
