import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchInput } from '.';

const Template: ComponentStory<typeof SearchInput> = args => <SearchInput {...args} />;

export const Default = Template.bind({});

export default {
  title: 'widgets/Header/SearchInput',
  component: SearchInput,
  args: {
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
  }
} as ComponentMeta<typeof SearchInput>;
