import { defineType, defineField } from 'sanity'
import { DoubleQuoteIcon } from '@sanity/icons/DoubleQuote'

export default defineType({
  name: 'pullquote',
  title: 'Pull Quote',
  type: 'object',
  icon: DoubleQuoteIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Quote Text',
      type: 'text',
      rows: 3,
      description: 'The highlighted quote text that will be visually pulled out in the body layout.',
      validation: (Rule) => Rule.required().min(5).error('Quote text is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare({ title }) {
      return {
        title: title ? `"${title}"` : 'Empty Pull Quote',
        subtitle: 'Pull Quote',
      }
    },
  },
})
