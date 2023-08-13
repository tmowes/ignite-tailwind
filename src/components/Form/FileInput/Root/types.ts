import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'div'> & {
  multiple?: boolean
}

export type FileInputContextData = {
  id: string
  multiple: boolean
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}
