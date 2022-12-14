import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BannerWidget as Banner } from './banner';

const Template: ComponentStory<typeof Banner> = args => <Banner {...args} />;

export const Default = Template.bind({});

export default {
  title: 'widgets/Banner',
  component: Banner,
  args: {
    imageBanner: { src: 'black-friday.png' },
    height: '12',
    width: 'max',
    ulr: '/'
  }
} as ComponentMeta<typeof Banner>;
