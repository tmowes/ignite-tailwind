import { VariantProps } from 'tailwind-variants'
import { fileItem } from '.'

export type FileItemProps = VariantProps<typeof fileItem> & {
  name: string
  size: number
  type: string
}
