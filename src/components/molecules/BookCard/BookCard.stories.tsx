import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import BookCard from './BookCard'
import ReadAgain from '../ReadAgain/ReadAgain'
import Buttons from '../../atoms/Buttons/Buttons'
import { AddIcon } from '../../Icons'

import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'molecules/BookCard',
  component: BookCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof BookCard>

const Template: ComponentStory<typeof BookCard> = (args) => <BookCard  {...args} />

export const Primary = Template.bind({});

const data = {
    "id":1,
    "image": "/Images/1.png",
    "title":"Bring Your Human to Work",
    "author":"Erica Keswin",
    "minutes":"13-minute read",
    "reads":"",
    "status":"reading",
    "type":"Trending",
    "audio":true
}

Primary.args = {
    children: <ReadAgain label='Finished'/>,
    img: data
}


export const FinishedCard = Template.bind({})

FinishedCard.args = {
    children: <ReadAgain label= 'Read Again' />,
    img: data
}

export const BasicCard = Template.bind({})

const allProps = {
    width: '100%',
    height: '52px',
    children: 'Add to library',
    startIcon: <AddIcon sx={{height: '24px', display: 'flex', position: 'relative', top: '5px'}} />
  }

BasicCard.args = {
    img: data,
    children: <Buttons variant='contained' {...allProps} color="secondary" />
}

