import { z } from 'zod'
import { create } from 'zustand'

const socialMediasSchema = z.array(
  z.object({
    social_media: z.enum(['Facebook', 'Instagram', 'LinkedIn']),
    link: z.string().nonempty('Link must be provided'),
  }),
)

const email = z
  .string()
  .email('Pleaze provide a valid email address')
  .nonempty('Email must be provided')
const phoneNumber = z
  .object({
    is_whatsapp: z.boolean().optional(),
    number: z.string().nonempty('Please enter a valid phone number'),
    whatsapp_link: z.string().optional(),
  })
  .refine((schema) => (schema.is_whatsapp ? !!schema.whatsapp_link : true), {
    message: 'Whats Link is required when phone number is whatsApp type',
  })

const mainContactsSchema = z.object({
  email: email.optional(),
  phoneNumber: phoneNumber.optional(),
  // func: z.function().args().returns(z.void()),
})

const callToActionSchema = z.object({
  label: z.string().nonempty('A Label is mandatory'),
  link: z.string().nonempty('A Link is mandatory'),
})

const navContactsStateSchema = z.object({
  mainContacts: mainContactsSchema.optional(),
  socialMedias: socialMediasSchema.optional(),
  callToAction: callToActionSchema.optional(),
})
const navContactsSchema = z.object({
  state: navContactsStateSchema,
})

type NavContactsStore = z.infer<typeof navContactsSchema>

const useNavContactsStore = create<NavContactsStore>((set) => ({
  state: {
    mainContacts: {
      email: '',
      phoneNumber: {
        number: '',
        is_whatsapp: false,
        whatsapp_link: undefined,
      },
    },
    socialMedias: [],
    callToAction: undefined,
  },
}))

export { useNavContactsStore, navContactsStateSchema }
export type { NavContactsStore }
