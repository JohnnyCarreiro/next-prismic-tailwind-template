import { Button } from '@/components/@core/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-24">
      <h1>Hello World</h1>
      <Button
        className={'rounded-full px-4'}
        isLoading={false}
        variant={'secondary'}
        disabled={false}
        size={'sm'}
      >
        Botão
      </Button>
    </main>
  )
}
