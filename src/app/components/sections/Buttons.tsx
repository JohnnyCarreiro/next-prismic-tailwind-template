import { Button } from '@core-ui/Button'
import { Heading } from '@core-ui/Heading'
import { Text } from '@core-ui/Text'
import React from 'react'

export const Buttons: React.FC = () => {
  return (
    <div className="flex w-full max-w-6xl flex-col items-center justify-start gap-4 align-middle">
      <div className="flex w-full flex-col gap-2 px-2 py-8">
        <Heading as="h3" size="sm">
          Buttons Styles
        </Heading>
        <Text as="p">Button Components by siezes, variations, and styles</Text>
      </div>
      <div className="flex w-full max-w-6xl justify-evenly gap-4 rounded-md bg-gray-300 px-2 py-8 max-sm:w-96 max-sm:flex-col max-sm:gap-8">
        {/* Primary */}
        <div className="flex flex-col items-center gap-2">
          <Heading className="mb-2" as="h3" size="xsm">
            Primary
          </Heading>
          <Button isLoading={false} size={'sm'}>
            Button
          </Button>
          <Button isLoading={false} size={'default'}>
            Button
          </Button>
          <Button isLoading={false} size={'lg'}>
            Button
          </Button>
        </div>
        {/* Secondary */}
        <div className="flex flex-col items-center gap-2">
          <Heading className="mb-2" as="h3" size="xsm">
            Secondary
          </Heading>
          <Button variant={'secondary'} size={'sm'}>
            Button
          </Button>
          <Button variant={'secondary'} size={'default'}>
            Button
          </Button>
          <Button variant={'secondary'} size={'lg'}>
            Button
          </Button>
        </div>
        {/* ghost */}
        <div className="flex flex-col items-center gap-2">
          <Heading className="mb-2" as="h3" size="xsm">
            Ghost
          </Heading>
          <Button variant={'ghost'} size={'sm'}>
            Button
          </Button>
          <Button variant={'ghost'} size={'default'}>
            Button
          </Button>
          <Button variant={'ghost'} size={'lg'}>
            Button
          </Button>
        </div>
        {/* Loading */}
        <div className="flex flex-col items-center gap-2">
          <Heading className="mb-2" as="h3" size="xsm">
            Loading
          </Heading>
          <Button variant={'ghost'} isLoading={true}>
            Button
          </Button>
          <Button variant={'secondary'} isLoading={true}>
            Button
          </Button>
          <Button variant={'default'} isLoading={true}>
            Button
          </Button>
        </div>
        {/* Disabled */}
        <div className="flex flex-col items-center gap-2">
          <Heading className="mb-2" as="h3" size="xsm">
            Disabled
          </Heading>
          <Button variant={'ghost'} disabled={true}>
            Button
          </Button>
          <Button variant={'secondary'} disabled={true}>
            Button
          </Button>
          <Button variant={'default'} disabled={true}>
            Button
          </Button>
        </div>
      </div>
    </div>
  )
}
