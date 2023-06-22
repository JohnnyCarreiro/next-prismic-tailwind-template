'use client'
// get nav items store here and add current path using usePathname from next navigation, than create scroll behaviour navigation to this navbar section
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useNavItemsStore } from '@/lib/nav-items-store'

import { Wrapper } from '@core-ui/Wrapper'
import { NavSection } from './NavSection'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'

export const BottomSection: FC = () => {
  const {
    actions: { setCurrentPath },
  } = useNavItemsStore.getState()
  setCurrentPath(usePathname()!)
  const [scrollData, scrollDataSet] = useState({
    y: 0,
    lastY: 0,
  })
  const [hideNavbar, hideNavbarSet] = useState<boolean>(false)

  const handleScroll = () => {
    scrollDataSet((prevState) => ({
      y: window.scrollY,
      lastY: prevState.y,
    }))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const SCROLLED_AMOUNT = 50

    if (scrollData.y > SCROLLED_AMOUNT) {
      hideNavbarSet(true)
    } else {
      hideNavbarSet(false)
    }

    if (scrollData.lastY < scrollData.y) {
      hideNavbarSet(true)
    } else {
      hideNavbarSet(false)
    }
  }, [scrollData])
  return (
    <div
      className={cn(
        'relative -z-10 w-full transform bg-brand-secondary transition-all duration-500 ease-in-out',
        {
          '-translate-y-full': hideNavbar,
        },
      )}
    >
      <Wrapper
        className={
          'min-h-16 relative flex h-16 items-center justify-between px-4 text-primary-100 md:flex md:h-20 xl:px-0'
        }
      >
        {/* Logo */}
        <div className={'py-4'}>
          <Link href={'/'}>
            <Image
              className="w-10 md:w-[60px]"
              src={'/images/logo.jpg'}
              width={50}
              height={50}
              alt={'Logo'}
            />
          </Link>
        </div>
        {/* Mobile Menu */}
        <MobileMenu />
        {/* Nav Section */}
        <NavSection />
      </Wrapper>
    </div>
  )
}
