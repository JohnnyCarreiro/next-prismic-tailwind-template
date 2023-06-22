import { FC } from 'react'

import { BottomSection } from './BottomSection'
import { ContactsSection } from './ContactsSection'
import { useNavContactsStore } from '@/lib/nav-contacts-store/nav-contacts-store'

type NavProps = object

export const Navbar: FC<NavProps> = () => {
  const { callToAction, mainContacts, socialMedias } =
    useNavContactsStore.getState().state

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
