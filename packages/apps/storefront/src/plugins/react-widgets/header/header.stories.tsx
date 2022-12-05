import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderWidget as Header } from './header';

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerType: 'default',
  cartQuantity: 3,
  currentProfile: { firstName: 'Emilia' },
  logoContent: 'logo.svg',
  logoIsVisible: true,
  searchInputPlaceholderText: 'O que você está procurando?',
  isSearchLoading: false,
  isSearchInputVisible: true,
  suggestions: [
    {
      id: '1',
      displayName: 'Geladeira',
      route: '',
      type: '',
      keyword: 'Geladeira',
      primarySmallImageURL: ''
    },
    {
      id: '2',
      displayName: 'Fogão',
      route: '',
      type: '',
      keyword: 'Fogão',
      primarySmallImageURL: ''
    },
    {
      id: '3',
      displayName: 'Sapato',
      route: '',
      type: '',
      keyword: 'Sapato',
      primarySmallImageURL: ''
    }
  ],
  searchTerms: '',
  setSearchTerms: () => null,
  onSearch: () => null
};

export const Cart = Template.bind({});
Cart.args = {
  headerType: 'cart',
  logoContent: 'logo.svg',
  logoIsVisible: true,
  contentTitle: 'Carrinho',
  securyImagesContent: ['site-blindado.png', 'site-seguro-google.png'],
  securyImagesIsVisible: true,
  titleIsVisible: true
};

export default {
  title: 'widgets/Header',
  component: Header
} as ComponentMeta<typeof Header>;
