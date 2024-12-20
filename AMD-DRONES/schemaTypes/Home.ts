import {defineField, defineType} from 'sanity'

const Home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'alt',
      title: 'ALT',
      type: 'string',
    }),
    defineField({
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'file',
      options: {
        accept: 'image/*',
      },
    }),
  ],
})

export default Home
