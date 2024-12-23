import {defineField, defineType} from 'sanity'

const ProductVersions = defineType({
  name: 'productVersion',
  title: 'Product Version',
  type: 'document',
  fields: [
    defineField({
      name: 'versionName',
      title: 'Version Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'imgUrl',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
      },
    }),
    defineField({
      name: 'relatedProduct',
      title: 'Related Product',
      type: 'reference',
      to: [{type: 'products'}],
    }),
  ],
})

export default ProductVersions
