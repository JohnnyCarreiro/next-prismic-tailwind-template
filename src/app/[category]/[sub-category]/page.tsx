import { headers } from 'next/headers'

interface PageProps {
  params: { category: string; 'sub-category': string }
}

export default function Page({ params }: PageProps) {
  const paths = headers().get('next-url')
  return (
    <div>
      <h1>{JSON.stringify(params)}</h1>
    </div>
  )
}
