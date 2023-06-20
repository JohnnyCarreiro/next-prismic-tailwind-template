import { ComponentProps, FC } from 'react'
import { Wrapper } from '@core-ui/Wrapper'
import { Button, buttonVariants } from '@core-ui/Button'
import Link from 'next/link'
import {
  FacebookIcon,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useNavContactsStore } from '@/lib/nav-contacts-store/nav-contacts-store'

interface Socialmedias {
  socialMedia: 'facebook' | 'instagram' | 'linkedin'
  socialMediaLink: string
}

interface MainContacts {
  email: string
  phone: {
    isWhatsApp: boolean
    phoneNumber: string
    whatsAppLink: string
  }
}

export interface ContactsSectionProps {
  action: object
  socialMedias: Socialmedias[]
  mainContacts: MainContacts
}

const SocialMediaIcon = {
  Facebook: (props?: ComponentProps<LucideIcon>) => <FacebookIcon {...props} />,
  Instagram: (props?: ComponentProps<LucideIcon>) => <Instagram {...props} />,
  LinkedIn: (props?: ComponentProps<LucideIcon>) => <Linkedin {...props} />,
}

function getPhoneNumberLink(phoneNumber: string) {
  // return phoneNumber.replace(' ', '').replace('.', '').replace('-', '')
  // const regex = /[\\\\s.-]+/g
  const regex = /[- .]/g
  return phoneNumber.replace(regex, '')
}

export const ContactsSection: FC = () => {
  const { callToAction, mainContacts, socialMedias } =
    useNavContactsStore.getState().state
  return (
    <div className={'bg-brand-secondary max-sm:hidden'}>
      <Wrapper
        className={
          'min-h-12 flex items-center justify-between py-2 text-primary-100'
        }
      >
        <div className={'inline-flex items-center space-x-4'}>
          {/* Action section */}
          {!!callToAction && !!callToAction.link && !!callToAction.label && (
            <Button
              className={'font-bold text-primary-950'}
              variant={'default'}
            >
              Action
            </Button>
          )}
          {/* Social contacts section */}
          <div className="inline-flex space-x-2">
            {socialMedias &&
              socialMedias?.length > 0 &&
              socialMedias?.map((socialMedia) => (
                <Link
                  key={socialMedia.link}
                  href={'#'}
                  aria-label={`${socialMedia.social_media} Profile`}
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                      className:
                        'group transition duration-300 hover:text-brand-primary',
                    }),
                  )}
                >
                  {SocialMediaIcon[
                    socialMedia.social_media as keyof typeof SocialMediaIcon
                  ]({
                    className:
                      'transition duration-300 group-hover:fill-brand-primary',
                  })}
                </Link>
              ))}
          </div>
        </div>
        {/* Main contacts section */}
        <div className={'inline-flex items-center space-x-4'}>
          {mainContacts?.phoneNumber?.number && (
            <Link
              className={
                'group inline-flex items-center space-x-2 hover:text-brand-primary'
              }
              href={
                mainContacts.phoneNumber.is_whatsapp
                  ? mainContacts.phoneNumber.whatsapp_link ||
                    `tel:${getPhoneNumberLink(mainContacts.phoneNumber.number)}`
                  : `tel:${getPhoneNumberLink(mainContacts.phoneNumber.number)}`
              }
            >
              <Phone
                className={
                  'transition duration-300 group-hover:fill-brand-primary'
                }
              />
              <span>{mainContacts.phoneNumber.number}</span>
            </Link>
          )}
          {mainContacts?.email && (
            <Link
              className={
                'group inline-flex items-center space-x-2 hover:text-brand-primary'
              }
              href={`mailto:${mainContacts.email}`}
            >
              <Mail
                className={
                  'text-primary-100 transition duration-300 group-hover:fill-brand-primary'
                }
              />
              <span>{mainContacts.email}</span>
            </Link>
          )}
        </div>
      </Wrapper>
    </div>
  )
}
