import { Heading } from '@core-ui/Heading'
import { Text } from '@core-ui/Text'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between px-24 py-24">
      <div className="mb-4 flex w-full max-w-6xl flex-col gap-2 p-4">
        <Heading as="h1" size="xlg" className={'text-center uppercase'}>
          Home Page
        </Heading>
        <Text>
          Get all components{' '}
          <Link
            href="/components"
            className="underline underline-offset-2 transition-all delay-300 hover:text-brand-primary"
          >
            here
          </Link>
        </Text>
      </div>
    </main>
  )
}
