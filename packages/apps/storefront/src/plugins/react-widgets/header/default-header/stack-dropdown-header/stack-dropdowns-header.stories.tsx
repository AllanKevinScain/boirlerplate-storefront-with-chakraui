import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StackDropdownHeader } from '.';

const Template: ComponentStory<typeof StackDropdownHeader> = args => <StackDropdownHeader {...args} />;

export const Default = Template.bind({});

export default {
  title: 'widgets/StackDropdownHeader',
  component: StackDropdownHeader,
  args: {
    internalBannerImage: 'banner_image_menu.png',
    navigableCollections: [
      { displayName: 'Eletrônicos', childCollections: [{ displayName: 'teste', route: '/' }] },
      { displayName: 'Teleônia', childCollections: [{ displayName: 'teste', route: '/' }] },
      { displayName: 'Eletromésticos', childCollections: [{ displayName: 'teste', route: '/' }] },
      {
        displayName: 'Informática',
        childCollections: [
          { displayName: 'Segurança e monitoramento', route: '/' },
          { displayName: 'Acessórios p/ Informática', route: '/' },
          { displayName: 'Automação', route: '/' },
          { displayName: 'All in one', route: '/' },
          { displayName: 'Componentes', route: '/' },
          { displayName: 'HD Externo', route: '/' },
          { displayName: 'Impressoras', route: '/' },
          { displayName: 'Monitores', route: '/' },
          { displayName: 'Mouses', route: '/' },
          { displayName: 'Multifuncionais', route: '/' },
          { displayName: 'Multifuncionais', route: '/' },
          { displayName: 'Multifuncionais', route: '/' }
        ]
      },
      { displayName: 'Games', childCollections: [{ displayName: 'teste', route: '/' }] },
      { displayName: 'Escritório', childCollections: [{ displayName: 'teste', route: '/' }] },
      { displayName: 'Eletroportáteis', childCollections: [{ displayName: 'teste', route: '/' }] }
    ]
  }
} as ComponentMeta<typeof StackDropdownHeader>;
