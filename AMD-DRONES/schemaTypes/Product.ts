import {defineField, defineType} from 'sanity'

const Product = defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'file',
      options: {
        accept: 'video/*,image/*',
      },
    }),
    defineField({
      name: 'thumbUrl',
      title: 'ThumbUrl',
      type: 'image',
      options: {
        accept: 'image/*',
        hotspot: true,
      },
    }),
    defineField({
      name: 'versions',
      title: 'Versions',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'productVersion'}]}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    }),
  ],
})

export default Product
