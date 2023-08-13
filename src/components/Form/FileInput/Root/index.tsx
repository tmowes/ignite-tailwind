'use client'

import { createContext, useContext, useId, useState } from 'react'
import { FileInputContextData, RootProps } from './types'

const FileInputContext = createContext({} as FileInputContextData)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prev) => [...prev, ...files])
    } else {
      setFiles(files)
    }
  }

  const providerValues = { id, files, onFilesSelected }

  return (
    <FileInputContext.Provider value={providerValues}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
