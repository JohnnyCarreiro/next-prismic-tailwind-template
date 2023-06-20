import React from 'react'

import { cn } from '@/lib/utils'
import { useNavItemsStore } from '@/lib/nav-items-store'
import { NavItem } from './NavItem'

export const NavSection: React.FC = () => {
  const {
    state: { navItems, isOpen },
  } = useNavItemsStore()
  return (
    <ul
      className={cn(
        'absolute -top-full left-0 z-[-1] h-full w-full -translate-y-full gap-4 bg-primary-500 px-4 text-lg opacity-0 transition-all duration-700 ease-in-out max-sm:min-h-screen md:relative md:top-auto md:z-auto md:flex md:w-auto md:translate-y-0 md:items-center md:bg-transparent md:px-0 md:opacity-100',
        {
          'top-16 translate-y-0 opacity-100': isOpen,
        },
      )}
    >
      {navItems.map((navItem) => (
        <NavItem key={navItem.name} navItem={navItem} />
      ))}
    </ul>
  )
}
