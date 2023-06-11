import { FC } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useNavItemsStore } from '@/lib/nav-items-store'

interface NatItemProps {
  navItem: {
    name: string
    link: string
    subMenu?: {
      name: string
      link: string
    }[]
  }
}

export const NavItem: FC<NatItemProps> = ({ navItem }) => {
  const {
    state: { currentPath },
  } = useNavItemsStore.getState()
  const isActive =
    navItem.link === currentPath
      ? true
      : navItem.link !== '/'
      ? currentPath?.startsWith(navItem.link)
      : false
  return (
    <li
      className={cn(
        'group max-w-full items-center border-b-2 border-b-primary-950/50 px-4 hover:border-b-brand-primary md:relative md:flex md:h-full md:max-w-fit md:border-b-2 md:border-b-transparent md:px-0 md:py-0 md:text-xl md:hover:text-brand-primary',
        {
          'text-primary-950 md:border-b-brand-primary md:text-brand-primary':
            isActive,
        },
      )}
    >
      <div
        className={cn('flex w-full items-center space-x-4 md:space-x-2', {
          'font-bold': isActive,
        })}
      >
        <Link
          className={'inline–block w-full py-7 md:py-0'}
          href={navItem.link}
        >
          {navItem.name}
        </Link>
        {navItem.subMenu && navItem.subMenu?.length > 0 && (
          <div className={'p-7 md:p-0'}>
            <ChevronDown
              className={
                'group-hover:rotate-180 group-hover:transition-all group-hover:duration-300'
              }
            />
          </div>
        )}
      </div>
      {navItem.subMenu && navItem.subMenu?.length > 0 && (
        <div
          className={
            'invisible right-0 top-14 z-50 flex w-40 transform flex-col items-center justify-center rounded-lg bg-gray-300 opacity-0 group-hover:visible group-hover:transform group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out max-sm:h-0 max-sm:w-full max-sm:items-start max-sm:bg-primary-300 max-sm:group-hover:mb-4 max-sm:group-hover:mt-2 max-sm:group-hover:h-auto max-sm:group-hover:p-4 md:absolute md:mb-0 md:p-2 md:shadow-xl'
          }
        >
          <ul className={'max-sm:w-full'}>
            {navItem.subMenu.map((subMenu) => (
              <li
                key={subMenu.name}
                className={
                  'w-full border-b-2 border-b-primary-900/50 p-4 text-primary-900 md:border-b-transparent md:p-0'
                }
              >
                <Link
                  className={cn('hover:text-primary-600', {
                    'font-bold text-primary-950': subMenu.link === currentPath,
                  })}
                  href={subMenu.link}
                >
                  {subMenu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}
