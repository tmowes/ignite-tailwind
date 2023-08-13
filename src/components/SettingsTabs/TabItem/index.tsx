'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItemProps } from './types'
import { motion } from 'framer-motion'

export function TabItem(props: TabItemProps) {
  const { value, title, isSelected = false } = props
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-orange-700 data-[state=active]:text-orange-700"
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-orange-700"
        />
      )}
    </Tabs.Trigger>
  )
}
