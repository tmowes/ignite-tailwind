'use client'

import { ChangeEvent } from 'react'
import { ControlProps } from './types'
import { useFileInput } from '../Root'

export function Control(props: ControlProps) {
  const { multiple = false, ...attrs } = props
  const { id, onFilesSelected } = useFileInput()

  function onChangeFiles(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return
    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={onChangeFiles}
      multiple={multiple}
      {...attrs}
    />
  )
}
