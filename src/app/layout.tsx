import './globals.css'
import {
  Roboto_Flex as Roboto,
  Ubuntu_Condensed as Ubuntu,
  Fira_Mono as FiraCode,
} from 'next/font/google'

import { getNavMenu } from '@/lib/prismic'
import { useNavItemsStore } from '@/lib/nav-items-store'
import { NavItemsClientStore } from '@/lib/initialize-nav-items-client-store'

import { Navbar } from '@/components/Navbar'
import { useNavContactsStore } from '@/lib/nav-contacts-store/nav-contacts-store'
import { NavContactsClientStore } from '@/lib/nav-contacts-store/initialize-nav-contacts-client-store'
import { ZodError } from 'zod'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ubuntu',
})
const fira = FiraCode({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'Template for Prismic CMS',
  description: 'Create awesome customizable templates for Prismic CMS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { navItems, navContacts } = await getNavMenu()
  useNavItemsStore.setState({
    state: { navItems, isOpen: false, currentPath: '/' },
  })
  useNavContactsStore.setState({
    state: navContacts,
  })
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${ubuntu.variable} ${fira.variable} font-sans`}
      >
        <NavItemsClientStore state={useNavItemsStore.getState().state} />
        <NavContactsClientStore state={useNavContactsStore.getState().state} />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
