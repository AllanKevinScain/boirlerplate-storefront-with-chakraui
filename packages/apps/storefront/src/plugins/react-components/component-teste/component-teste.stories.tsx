import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ComponentTeste from '.';

const Template: ComponentStory<typeof ComponentTeste> = args => <ComponentTeste {...args} />;

export const Default = Template.bind({});

export default {
  title: 'widgets/ComponentTeste',
  component: ComponentTeste,
  args: []
} as ComponentMeta<typeof ComponentTeste>;
