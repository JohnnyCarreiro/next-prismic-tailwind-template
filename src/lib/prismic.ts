import { SliceComponentProps } from '@prismicio/react'
import { createClient } from '../../prismicio'
import * as prismicT from '@prismicio/types'
import { Content } from '@prismicio/client'
import {
  navContactsStateSchema,
  type NavContactsStore,
} from './nav-contacts-store/nav-contacts-store'
import { ZodError } from 'zod'
import { Result } from 'postcss'

const client = createClient()

// type SafeParseSuccess<Output> = {
//   success: true
//   data: Output
// }
// type SafeParseError<Input> = {
//   success: false
//   error: ZodError<Input>
// }

interface CreateSubMenuLinkProps {
  parentLink: prismicT.FilledLinkToDocumentField
  link: prismicT.FilledLinkToDocumentField
}
function createSubMenuLink({
  parentLink,
  link,
}: CreateSubMenuLinkProps): string {
  const parsedLink = `${parentLink.uid}/${link.uid}`

  return parsedLink
}

function getNavContacts(
  slices: SliceComponentProps<Content.NavContactsSlice>['slice'][],
) {
  // TODO: Check for null
  const email = (
    slices.filter((slice) => slice.variation === 'email')[0]?.primary as {
      email: string | null
    }
  )?.email

  // TODO: Check for null
  const phoneNumber = slices.filter(
    (slice) => slice.variation === 'phoneNumber',
  )[0]?.primary as {
    number: string
    whatsapp_link: any
    is_whatsapp: boolean
  }

  // TODO: Check for null
  const socialMedias = slices.filter(
    (slice) => slice.variation === 'default',
  )[0]?.items

  // TODO: Check for null, if
  const mainContacts = {
    phoneNumber: phoneNumber
      ? {
          number: phoneNumber?.number,
          is_whatsapp: phoneNumber?.is_whatsapp || false,
          whatsapp_link:
            (phoneNumber?.whatsapp_link as prismicT.FilledLinkToWebField)
              ?.url || undefined,
        }
      : undefined,
    email: email || undefined,
  }

  const navContacts = {
    mainContacts: mainContacts || undefined,
    socialMedias:
      socialMedias && socialMedias.length > 0
        ? socialMedias?.map((socialMedia) => ({
            social_media: socialMedia?.social_media,
            link:
              (socialMedia?.link as prismicT.FilledLinkToWebField)?.url ||
              undefined,
          }))
        : undefined,
  }
  const result = navContactsStateSchema.safeParse(navContacts)

  console.log(
    '>>>>> Main Contacts parsed result: ',
    JSON.stringify(result, null, 2),
  )
  if (!result.success) {
    console.log(
      '>>>>> Failed to parse, error message: ',
      result.error.issues[0].message,
    )
    console.log(
      '>>>>> Failed to parse: ',
      JSON.stringify(result.error, null, 2),
    )
  }
  return navContactsStateSchema.safeParse(navContacts)

  // const parsedNavContacts = navContacts
  //   ? navContactsStateSchema.parse(navContacts)
  //   : undefined
  // return parsedNavContacts
}

function getNavLinks(
  slices: SliceComponentProps<Content.MenuOpcoesSlice>['slice'][],
) {
  const navLinks = slices.map((navItem) => ({
    name: navItem.primary.name as string,
    link:
      navItem.primary.link.link_type === 'Document'
        ? `/${
            (navItem.primary.link as prismicT.FilledLinkToDocumentField)
              .type === 'home'
              ? ''
              : (navItem.primary.link as prismicT.FilledLinkToDocumentField).uid
          }`
        : (navItem.primary.link as prismicT.FilledLinkToWebField).url,
    subMenu:
      navItem.items.length > 0
        ? navItem.items.map((subMenuItem) => ({
            name: subMenuItem.subMenuName as string,
            link:
              subMenuItem.subMenuLink.link_type === 'Document'
                ? `/${
                    (
                      subMenuItem.subMenuLink as prismicT.FilledLinkToDocumentField
                    ).type === 'home'
                      ? ''
                      : createSubMenuLink({
                          parentLink: navItem.primary
                            .link as prismicT.FilledLinkToDocumentField,
                          link: subMenuItem.subMenuLink as prismicT.FilledLinkToDocumentField,
                        })
                  }`
                : (subMenuItem.subMenuLink as prismicT.FilledLinkToWebField)
                    .url,
          }))
        : [],
  }))

  return navLinks
}

export async function getNavMenu() {
  const document = await client.getSingle('navegacao')
  const navContactsSlices = document.data.slices.filter(
    (slice) => slice.slice_type === 'nav_contacts',
  ) as SliceComponentProps<Content.NavContactsSlice>['slice'][]

  let navContacts: NavContactsStore['state'] | undefined = {}
  // TODO: remove length and trest validations in `getNavContacts`
  if (navContactsSlices.length > 0) {
    const result = getNavContacts(navContactsSlices)
    if (result.success) {
      navContacts = result.data
    }
  }

  const navItemsSlice = document.data.slices.filter(
    (slice) => slice.slice_type === 'menu_opcoes',
  ) as SliceComponentProps<Content.MenuOpcoesSlice>['slice'][]
  // TODO: Check for slices length and then assign value from getNavLinks to navItems variable;
  const navItems = getNavLinks(navItemsSlice)

  return { navItems, navContacts }
}

type DocumentType = 'navegacao' | 'home' | 'page'

export async function getSingleDocument(type: DocumentType) {
  const document = await client.getSingle(type)
  return document.data
}

export async function getSinglePage(type: DocumentType) {
  const document = await client.getSingle(type)
  return document
}

export async function getPageByUID(type: DocumentType, uid: string) {
  const document = await client.getByUID(type, uid)
  return document
}
