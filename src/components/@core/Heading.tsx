import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const textVariantProps = cva('text-inherit leading-relaxed font-brand', {
  variants: {
    size: {
      xsm: 'text-2xl max-md:text-xl',
      sm: 'text-4xl max-sm:text-2xl max-md:text-3xl ',
      md: 'text-5xl max-sm:text-3xl max-md:text-4xl ',
      lg: 'text-6xl max-sm:text-4xl max-md:text-5xl ',
      xlg: 'text-7xl max-sm:text-5xl max-md:text-6xl ',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface Props extends VariantProps<typeof textVariantProps> {
  children: React.ReactNode
}

type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

// `TextProps` now uses `PolymorphicComponentProps` to add the `as` prop
// and inherit its prop
type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  Props
>

export const Heading = <C extends React.ElementType = AllowedTags>({
  as,
  children,
  className,
  size,
  ...other
}: TextProps<C>) => {
  const Component = as || 'h2'

  return (
    <Component className={cn(textVariantProps({ className, size }))} {...other}>
      {children}
    </Component>
  )
}