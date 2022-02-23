import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ButtonsRow from './ButtonsRow'

export default {
  title: 'molecules/ButtonsRow',
  component: ButtonsRow
} as ComponentMeta<typeof ButtonsRow>

const Template: ComponentStory<typeof ButtonsRow> = () => <ButtonsRow  />

export const Primary = Template.bind({})

Primary.args = {

}