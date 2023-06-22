import { Heading } from '@core-ui/Heading'

export const Headings: React.FC = () => {
  return (
    <div className="mb-8 flex w-full max-w-6xl flex-col justify-start gap-4 p-4 align-middle">
      <Heading as="h1" size="xlg" className={'uppercase'}>
        Heading for H1 XLG
      </Heading>
      <Heading as="h1" size="lg" className={'uppercase'}>
        Heading for H1 LG
      </Heading>
      <Heading className={'uppercase'}>Default Heading H2 MD</Heading>
      <Heading as="h3" size="sm" className={' uppercase'}>
        Default Heading H3 SM
      </Heading>
      <Heading as="h4" size="xsm" className={' uppercase'}>
        Default Heading H3 XSM
      </Heading>
    </div>
  )
}
