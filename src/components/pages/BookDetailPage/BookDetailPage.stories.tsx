import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import BookDetailPage from './BookDetailPage'

export default {
  title: 'pages/BookDetailPage',
  component: BookDetailPage,
} as ComponentMeta<typeof BookDetailPage>

const Template: ComponentStory<typeof BookDetailPage> = () => <BookDetailPage />

export const bookDetailPage = Template.bind({})
