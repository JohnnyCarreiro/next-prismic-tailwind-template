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
  const navItems = await getNavMenu()
  console.log('NavItems from CMS: ', navItems)
  useNavItemsStore.setState({
    state: { navItems, isOpen: false, currentPath: '/' },
  })
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${ubuntu.variable} ${fira.variable} font-sans`}
      >
        <NavItemsClientStore state={useNavItemsStore.getState().state} />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
