import { Heading } from '@core-ui/Heading'
import { Text } from '@core-ui/Text'

export const Texts: React.FC = () => {
  return (
    <div className="w-full max-w-6xl grid-cols-3 sm:flex sm:flex-col md:grid">
      <div className="max-w-md p-4 text-secondary-800">
        <Heading className="mb-2" as="h3" size="xsm">
          Normal Text
        </Heading>
        <Text as="p" className="line-clamp-3">
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais
          bolis eu num gostis.
        </Text>
      </div>
      <div className="max-w-md p-4 text-secondary-800">
        <Heading className="mb-2" as="h3" size="xsm">
          Normal Text - lg
        </Heading>
        <Text as="p" size="lg" className="line-clamp-3">
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais
          bolis eu num gostis.
        </Text>
      </div>
      <div className="max-w-md p-4 text-secondary-800">
        <Heading className="mb-2" as="h3" size="xsm">
          Normal Text - sm
        </Heading>
        <Text as="p" size="sm" className="line-clamp-3">
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais
          bolis eu num gostis.
        </Text>
      </div>
      <div className="max-w-md p-4 text-secondary-800">
        <Heading className="mb-2" as="h3" size="xsm">
          Small Text
        </Heading>
        <Text as="small" size="sm" className="line-clamp-3">
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais
          bolis eu num gostis.
        </Text>
      </div>
      <div className="max-w-md p-4 text-secondary-800">
        <Heading className="mb-2" as="h3" size="xsm">
          Strong Text
        </Heading>
        <Text as="strong" className="line-clamp-3">
          Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris
          se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais
          bolis eu num gostis.
        </Text>
      </div>
    </div>
  )
}
