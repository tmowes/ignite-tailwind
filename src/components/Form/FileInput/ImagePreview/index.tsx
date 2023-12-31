/* eslint-disable @next/next/no-img-element */
'use client'

import { useMemo } from 'react'
import { User } from 'lucide-react'
import { useFileInput } from '../Root'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) return null
    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 dark:bg-zinc-800">
        <User className="h-8 w-8 text-orange-500 dark:text-orange-300" />
      </div>
    )
  }

  return (
    <img
      alt=""
      src={previewURL}
      className="h-16 w-16 rounded-full bg-orange-50 object-cover dark:bg-zinc-800"
    />
  )
}
