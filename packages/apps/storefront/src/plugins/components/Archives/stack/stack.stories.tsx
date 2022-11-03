import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack } from '.';

const Template: ComponentStory<typeof Stack> = args => <Stack {...args} />;

export const Default = Template.bind({});

export default {
  title: 'components/Stack',
  component: Stack
} as ComponentMeta<typeof Stack>;
