import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const textVariantProps = cva('text-inherit leading-relaxed', {
  variants: {
    size: {
      sm: 'text-sm max-sm:text-base',
      md: 'text-base max-sm:text-lg',
      lg: 'text-lg max-sm:text-xlg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface Props extends VariantProps<typeof textVariantProps> {
  children: React.ReactNode
}

type AllowedTags =
  | 'p'
  | 'strong'
  | 'span'
  | 'em'
  | 'pre'
  | 'small'
  | 'q'
  | 'code'
  | 'mark'
  | 'sub'
  | 'sup'
  | 'ins'
  | 'del'
  | 'i'
  | 'b'

// `TextProps` now uses `PolymorphicComponentProps` to add the `as` prop
// and inherit its prop
type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  Props
>

export const Text = <C extends React.ElementType = AllowedTags>({
  as,
  children,
  className,
  size,
  ...other
}: TextProps<C>) => {
  const Component = as || 'p'

  return (
    <Component className={cn(textVariantProps({ className, size }))} {...other}>
      {children}
    </Component>
  )
}
