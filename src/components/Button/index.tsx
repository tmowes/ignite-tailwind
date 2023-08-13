import { tv } from 'tailwind-variants'

import { Slot } from '@radix-ui/react-slot'
import { ButtonProps } from './types'

export const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none dark:hover:bg-white/5',
      primary:
        'bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export function Button(props: ButtonProps) {
  const { asChild, variant, className, ...attrs } = props
  const Component = asChild ? Slot : 'button'
  return <Component className={button({ variant, className })} {...attrs} />
}
