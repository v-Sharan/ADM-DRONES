import {defineField, defineType} from 'sanity'

const About = defineType({
  name: 'about',
  title: 'About',
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
        accept: 'image/*',
      },
    }),
  ],
})

export default About
