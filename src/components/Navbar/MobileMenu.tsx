import { FC } from 'react'
import { Menu, X } from 'lucide-react'

import { useNavItemsStore } from '@/lib/nav-items-store'

import { Button } from '@core-ui/Button'

export const MobileMenu: FC = () => {
  const {
    state: { isOpen },
    actions: { toggleMenu },
  } = useNavItemsStore()
  return (
    <Button
      variant={'ghost'}
      className={
        'absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer md:hidden'
      }
      onClick={toggleMenu}
    >
      {isOpen ? (
        <X size={24} className={'text-primary-100'} />
      ) : (
        <Menu size={24} className={'text-primary-100'} />
      )}
    </Button>
  )
}
