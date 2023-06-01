import { Button } from '@/components/@core/Button'
import { Heading } from '@/components/@core/Heading'
import { Text } from '@/components/@core/Text'

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between px-24 py-24">
      <Heading as="h1" size="xlg" className={'uppercase'}>
        Heading for H1 XLG
      </Heading>
      <Heading as="h1" size="lg" className={'uppercase'}>
        Heading for H1 LG
      </Heading>
      <Heading className={'uppercase'}>Default Heading H2 MD</Heading>
      <Heading as="h3" size="sm" className={' uppercase'}>
        Default Heading H3 SM;
      </Heading>
      <Heading as="h4" size="xsm" className={' uppercase'}>
        Default Heading H3 XSM;
      </Heading>
      <Button
        className={
          'rounded-full bg-brand_primary px-4 text-primary-950 hover:bg-primary-200'
        }
        isLoading={false}
        variant={'secondary'}
        disabled={false}
        size={'sm'}
      >
        Botão
      </Button>
      <div className="max-w-md p-4 text-secondary-800">
        <Text as="p" className="line-clamp-3">
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais
          bolis eu num gostis.
        </Text>
        <Text as="strong" size="lg" className="line-clamp-3">
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais
          bolis eu num gostis.
        </Text>
        <Text as="small" size="sm" className="line-clamp-3">
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais
          bolis eu num gostis.
        </Text>
      </div>
    </main>
  )
}
