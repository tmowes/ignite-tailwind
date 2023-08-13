import { ButtonHTMLAttributes } from 'react'
import { VariantProps } from 'tailwind-variants'
import { button } from '.'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    asChild?: boolean
  }
