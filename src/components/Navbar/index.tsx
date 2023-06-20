'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'

import { useNavItemsStore } from '@/lib/nav-items-store'

import { BottomSection } from './BottomSection'
import { ContactsSection } from './ContactsSection'
import { useNavContactsStore } from '@/lib/nav-contacts-store/nav-contacts-store'

type NavProps = object

export const Navbar: FC<NavProps> = () => {
  const {
    actions: { setCurrentPath },
  } = useNavItemsStore.getState()
  setCurrentPath(usePathname()!)
  const { callToAction, mainContacts, socialMedias } =
    useNavContactsStore.getState().state

  console.log('callToAction: ', !!callToAction)
  console.log('mainContacts: ', !!mainContacts)
  console.log('socialMedias: ', !!socialMedias)

  return (
    <header className={'sticky left-0 top-0 w-full'}>
      {(!!callToAction ||
        !!mainContacts?.email ||
        mainContacts?.phoneNumber ||
        !!socialMedias) && <ContactsSection />}
      <BottomSection />
    </header>
  )
}
