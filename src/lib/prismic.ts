import { createClient } from '../../prismicio'
import * as prismicT from '@prismicio/types'

const client = createClient()

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

export async function getNavMenu() {
  const document = await client.getSingle('navegacao')
  const navItems = document.data.slices.map((navItem) => ({
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
  return navItems
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
