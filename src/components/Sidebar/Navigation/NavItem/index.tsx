import { ChevronDown } from 'lucide-react'
import { NavItemProps } from './types'

export function NavItem(props: NavItemProps) {
  const { title, icon: Icon } = props
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-orange-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-orange-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-orange-300" />
    </a>
  )
}
