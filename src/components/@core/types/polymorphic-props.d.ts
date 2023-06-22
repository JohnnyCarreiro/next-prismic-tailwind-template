import React from 'react'
declare global {
  declare type PropsOf<
    C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  > = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>

  type AsProp<C extends React.ElementType> = {
    /**
     * An override of the default HTML tag.
     * Can also be another React component.
     */
    as?: C
  }

  /**
   * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
   * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
   * set of props.
   */
  declare type ExtendableProps<
    ExtendedProps = Record<string, never>,
    OverrideProps = Record<string, never>,
  > = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>

  /**
   * Allows for inheriting the props from the specified element type so that
   * props like children, className & style work, as well as element-specific
   * attributes like aria roles. The component (`C`) must be passed in.
   */
  declare type InheritableElementProps<
    C extends React.ElementType,
    Props = Record<string, never>,
  > = ExtendableProps<PropsOf<C>, Props>

  /**
   * A more sophisticated version of `InheritableElementProps` where
   * the passed in `as` prop will determine which props can be included
   */
  declare type PolymorphicComponentProps<
    C extends React.ElementType,
    Props = Record<string, never>,
  > = InheritableElementProps<C, Props & AsProp<C>>
}
// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
