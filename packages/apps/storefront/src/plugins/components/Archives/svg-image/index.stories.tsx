import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SvgImage } from '.';

const Template: ComponentStory<typeof SvgImage> = args => <SvgImage {...args} />;

export const Default = Template.bind({});

export default {
  title: 'components/SvgImage',
  component: SvgImage,
  args: { color: 'black', sizeY: '7', sizeX: '7', src: 'information_icon.svg' }
} as ComponentMeta<typeof SvgImage>;
