'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

type DrawerContextType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const DrawerContext = createContext({} as DrawerContextType)

type DrawerProviderProps = {
  children: ReactNode
}

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [open, setOpen] = useState(true)

  return (
    <DrawerContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
