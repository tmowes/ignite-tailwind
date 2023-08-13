'use client'

import { createContext, useContext, useId, useState } from 'react'
import { FileInputContextData, RootProps } from './types'
import { twMerge } from 'tailwind-merge'

const FileInputContext = createContext({} as FileInputContextData)

export function Root(props: RootProps) {
  const { id, multiple = false, ...attrs } = props
  const customId = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multi: boolean) {
    if (multi) {
      setFiles((prev) => [...prev, ...files])
    } else {
      setFiles(files)
    }
  }

  const providerValues = {
    id: id ?? customId,
    multiple,
    files,
    onFilesSelected,
  }

  return (
    <FileInputContext.Provider value={providerValues}>
      <div className={twMerge('group w-full', props.className)} {...attrs} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
