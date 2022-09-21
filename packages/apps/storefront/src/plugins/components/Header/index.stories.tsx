import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from '.';

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Cart = Template.bind({});
Cart.args = {
  headerType: 'cart',
  logoContent: 'logo.svg',
  logoIsVisible: true,
  contentTitle: 'Carrinho',
  securyImagesContent: ['secury_armored.png', 'secury_google.png'],
  securyImagesIsVisible: true,
  titleIsVisible: true
};

export default {
  title: 'widgets/Header',
  component: Header
} as ComponentMeta<typeof Header>;
