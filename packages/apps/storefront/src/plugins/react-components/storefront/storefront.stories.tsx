import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SwiperSlide } from 'swiper/react';
import { Storefront } from '.';

const Template: ComponentStory<typeof Storefront> = args => <Storefront {...args} />;

export const Default = Template.bind({});

const boxes = [0, 1, 2, 3, 4, 5, 6, 7];

export default {
  title: 'components/Storefront',
  component: Storefront,
  args: {
    breakpoints: {
      '@0.00': {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    height: '105.5',
    children: boxes.map((item, index) => <SwiperSlide key={item || index}>{item}</SwiperSlide>)
  }
} as ComponentMeta<typeof Storefront>;
