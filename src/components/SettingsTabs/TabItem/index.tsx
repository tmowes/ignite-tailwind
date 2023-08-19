'use client'

import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItemProps } from './types'

export function TabItem(props: TabItemProps) {
  const { value, title, isSelected = false } = props
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium leading-5 text-zinc-500 outline-none data-[state=active]:text-orange-700 hover:text-orange-700 dark:text-zinc-400 dark:data-[state=active]:text-zinc-100 dark:hover:text-zinc-100"
    >
      <span className="whitespace-nowrap rounded p-1 ring-offset-transparent group-focus-visible:ring-1 group-focus-visible:ring-orange-400 group-focus-visible:ring-offset-1">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-orange-700 dark:bg-orange-400"
        />
      )}
    </Tabs.Trigger>
  )
}
