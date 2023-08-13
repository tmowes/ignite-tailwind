import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'div'>

export type FileInputContextData = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}
