import {defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'

export default {
  name: 'avatarImage',
  title: 'Avatar Image',
  type: 'image',
  icon: UserIcon,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
    },
  ],
}
