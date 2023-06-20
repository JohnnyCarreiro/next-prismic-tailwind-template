import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SocialMedias`.
 */
export type SocialMediasProps = SliceComponentProps<Content.SocialMediasSlice>;

/**
 * Component for "SocialMedias" Slices.
 */
const SocialMedias = ({ slice }: SocialMediasProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for social_medias (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SocialMedias;
