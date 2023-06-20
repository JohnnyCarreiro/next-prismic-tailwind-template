import { Heading } from '@core-ui/Heading'
import { Text } from '@core-ui/Text'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className={
        'mx-auto grid h-full min-h-screen max-w-7xl place-items-center'
      }
    >
      <div>
        <Heading>Not Found</Heading>
        <Text>Could not find requested resource</Text>
        <Text>
          Back to{' '}
          <Link
            className={
              'font-semibold text-primary-700 underline underline-offset-2'
            }
            href="/"
          >
            Home page
          </Link>
        </Text>
      </div>
    </div>
  )
}
