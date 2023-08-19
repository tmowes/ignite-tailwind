'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useFileInput } from '../Root'
import { FileItem } from '../FileItem'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  if (files.length === 0) {
    return null
  }

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map(({ name, size, type }) => (
        <FileItem
          key={name}
          name={name}
          size={size}
          type={type}
          state="error"
        />
      ))}
    </div>
  )
}
