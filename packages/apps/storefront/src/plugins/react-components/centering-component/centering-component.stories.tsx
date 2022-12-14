import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenteringComponent } from '.';

const Template: ComponentStory<typeof CenteringComponent> = args => <CenteringComponent {...args} />;

export const Default = Template.bind({});

export default {
  title: 'components/CenteringComponent',
  component: CenteringComponent,
  args: {}
} as ComponentMeta<typeof CenteringComponent>;
