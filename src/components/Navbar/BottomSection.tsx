import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Wrapper } from '@core-ui/Wrapper'
import { NavSection } from './NavSection'
import { MobileMenu } from './MobileMenu'

export const BottomSection: FC = () => {
  return (
    <div className={'w-full bg-brand-secondary'}>
      <Wrapper
        className={
          'min-h-16 relative flex h-16 items-center justify-between px-4 md:flex md:h-20 xl:px-0'
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
