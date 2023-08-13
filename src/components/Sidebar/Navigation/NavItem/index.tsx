import { ChevronDown } from 'lucide-react'
import { NavItemProps } from './types'

export function NavItem(props: NavItemProps) {
  const { title, icon: Icon } = props
  return (
    <a
      href=""
      className="focus-visible:ring-orange-500dark:hover:bg-zinc-800 group flex items-center gap-3 rounded px-3 py-2 outline-none hover:bg-orange-50 focus-visible:ring-2"
    >
      <Icon className="h-5 w-5  flex-shrink-0 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-orange-500 dark:text-zinc-100 dark:group-hover:text-orange-300">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-orange-300 dark:text-zinc-600" />
    </a>
  )
}
