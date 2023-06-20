import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NavContacts`.
 */
export type NavContactsProps = SliceComponentProps<Content.NavContactsSlice>;

/**
 * Component for "NavContacts" Slices.
 */
const NavContacts = ({ slice }: NavContactsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav_contacts (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NavContacts;
