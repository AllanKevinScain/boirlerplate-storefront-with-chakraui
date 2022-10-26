import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ComponentesChakra from '.';

const Template: ComponentStory<typeof ComponentesChakra> = args => <ComponentesChakra {...args} />;

export const Default = Template.bind({});

export default {
  title: 'teste/ComponentesChakra',
  component: ComponentesChakra,
  args: []
} as ComponentMeta<typeof ComponentesChakra>;
