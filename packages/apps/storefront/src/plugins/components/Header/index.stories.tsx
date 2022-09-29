import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '.';

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});

export default {
  title: 'widgets/Header',
  component: Header,
  args: []
} as ComponentMeta<typeof Header>;
