'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'

import { useNavItemsStore } from '@/lib/nav-items-store'
import { BottomSection } from './BottomSection'

type NavProps = object

export const Navbar: FC<NavProps> = () => {
  const {
    actions: { setCurrentPath },
  } = useNavItemsStore.getState()
  setCurrentPath(usePathname()!)

  return (
    <header className={'sticky left-0 top-0 w-full'}>
      {/* <div className={'h-16 bg-brand-primary'} /> */}
      <BottomSection />
    </header>
  )
}
