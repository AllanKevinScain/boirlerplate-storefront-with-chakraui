import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SvgImage } from '.';

const Template: ComponentStory<typeof SvgImage> = args => <SvgImage {...args} />;

export const Default = Template.bind({});

export default {
  title: 'components/SvgImage',
  component: SvgImage,
  args: { color: 'blackAlpha.800', sizey: '7', sizex: '7', src: 'icon_info.svg' }
} as ComponentMeta<typeof SvgImage>;
