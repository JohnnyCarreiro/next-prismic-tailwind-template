import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `MenuOpcoes`.
 */
export type MenuOpcoesProps = SliceComponentProps<Content.MenuOpcoesSlice>

/**
 * Component for "MenuOpcoes" Slices.
 */
const MenuOpcoes = ({ slice }: MenuOpcoesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for menu_opcoes (variation: {slice.variation})
      Slices
    </section>
  )
}

export default MenuOpcoes
