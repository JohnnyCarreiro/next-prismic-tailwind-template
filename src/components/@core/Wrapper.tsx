import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

type WrapperProps = HTMLAttributes<HTMLDivElement>

export const Wrapper: FC<WrapperProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        `mx-auto w-full max-w-7xl px-5 md:px-10 xl:px-0 ${className || ''}`,
      )}
    >
      {children}
    </div>
  )
}
