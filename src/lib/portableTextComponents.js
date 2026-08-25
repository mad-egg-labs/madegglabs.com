import avatarimage from '../components/avatarimage.astro'
import emaillink   from '../components/emaillink.astro'
import faqblock    from '../components/faqblock.astro'
import heading2    from '../components/heading2.astro'
import image       from '../components/image.astro'
import pullquote   from '../components/pullquote.astro'

export const portableTextComponents = {
  block: {
    h2: heading2,
  },
  type: {
    avatarImage: avatarimage,
    faqBlock: faqblock,
    image: image,
    pullquote: pullquote,
  },
  mark: {
    emailLink: emaillink,
  },
}
