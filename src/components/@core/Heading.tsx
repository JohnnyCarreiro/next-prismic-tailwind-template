import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const textVariantProps = cva('text-inherit leading-relaxed font-brand', {
  variants: {
    size: {
      xsm: 'text-2xl max-md:text-xl' /** 1.25rem 20px - 1.5rem 24px */,
      sm: 'text-4xl max-sm:text-2xl max-md:text-3xl ' /** 1.5rem 24px - 1.875rem 30px - 2.25rem 36px */,
      md: 'text-5xl max-sm:text-3xl max-md:text-4xl ' /** 1.875rem 30px - 2.25rem 36px - 3rem 48px */,
      lg: 'text-6xl max-sm:text-4xl max-md:text-5xl ' /** 2.25rem 36px - 3rem 48px - 3.75rem 60px */,
      xlg: 'text-7xl max-sm:text-5xl max-md:text-6xl ' /** 3rem 48px - 3.75rem 60px - 4.5rem 72px */,
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
