import { Button } from '@/components/@core/Button'
import { Heading } from '@/components/@core/Heading'
import { Text } from '@/components/@core/Text'

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between px-24 py-24">
      <Heading as="h1" size="xlg" className={'uppercase'}>
        Home Page
      </Heading>
    </main>
  )
}
