import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WidgetTeste from '.';

const Template: ComponentStory<typeof WidgetTeste> = args => <WidgetTeste {...args} />;

export const Default = Template.bind({});

export default {
  title: 'widgets/WidgetTeste',
  component: WidgetTeste,
  args: []
} as ComponentMeta<typeof WidgetTeste>;
