import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonAdd } from '.';

const Template: ComponentStory<typeof ButtonAdd> = args => <ButtonAdd {...args} />;

export const Default = Template.bind({});

export default {
  title: 'components/ButtonAdd',
  component: ButtonAdd,
  args: { disabled: false, cartQuantity: 0 }
} as ComponentMeta<typeof ButtonAdd>;
