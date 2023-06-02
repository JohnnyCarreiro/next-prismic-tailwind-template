import { Heading } from '@/components/@core/Heading'
import { Text } from '@/components/@core/Text'

import { Headings } from './sections/Headings'
import { Buttons } from './sections/Buttons'
import { Texts } from './sections/Texts'

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between sm:p-10 md:p-24">
      <div className="mb-8 flex w-full max-w-6xl flex-col gap-2 p-4">
        <Heading className="mb-4 uppercase" as="h1" size="xlg">
          Default Components and Styles.
        </Heading>
        <Text as="p">
          Use the default components to create your own components and Layouts.
        </Text>
      </div>
      <Headings />
      <Texts />
      <Buttons />
    </main>
  )
}
