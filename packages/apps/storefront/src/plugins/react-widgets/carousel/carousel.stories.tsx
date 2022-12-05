import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Image } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CarouselWidget as Carousel } from './carousel';

const Template: ComponentStory<typeof Carousel> = args => <Carousel {...args} />;

export const Default = Template.bind({});

const carroselImages = [
  'carousel-console-image.png',
  'carousel-notebook-image.png',
  'carousel-offers-image.png',
  'carousel-motorola-image.png',
  'carousel-copa-image.png'
];

export default {
  title: 'widgets/Carousel',
  component: Carousel,
  args: {
    children: carroselImages.map((item, index) => (
      <SwiperSlide key={item || index}>
        <Image src={`file/general/${item}`} w="max" />
      </SwiperSlide>
    ))
  }
} as ComponentMeta<typeof Carousel>;
