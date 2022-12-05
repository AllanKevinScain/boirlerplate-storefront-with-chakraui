import React, { useState } from 'react';
import { HeaderWidget } from './header';

export default props => {
  const { headerType = 'cart' } = props;
  const [searchTerms, setSearchTerms] = useState('');

  return (
    <HeaderWidget
      headerType={headerType}
      logoIsVisible={true}
      securyImagesIsVisible={true}
      logoContent="logo.svg"
      titleIsVisible={true}
      contentTitle="Carrinho"
      searchInputPlaceholderText="O que você está procurando?"
      isSearchLoading={false}
      isSearchInputVisible={true}
      suggestions={[
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
      ]}
      securyImagesContent={['site-blindado.png', 'site-seguro-google.png']}
      searchTerms={searchTerms}
      setSearchTerms={setSearchTerms}
      cartQuantity={3}
      currentProfile={{ firstName: 'Emilia' }}
      onNavigateToCart={() => console.log('foi')}
      onNavigateToFavorites={() => console.log('foi')}
      onNavigateToprofile={() => console.log('foi')}
      onSearch={() => null}
      internalBannerImage="banner_image_menu.png"
      navigableCollections={[
        {
          displayName: 'Eletrônicos',
          childCollections: [{ displayName: 'teste', route: '/' }]
        },
        { displayName: 'Telefonia', childCollections: [{ displayName: 'teste', route: '/' }] },
        {
          displayName: 'Eletromésticos',
          childCollections: [{ displayName: 'teste', route: '/' }]
        },
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
        {
          displayName: 'Eletroportáteis',
          childCollections: [{ displayName: 'teste', route: '/' }]
        }
      ]}
      {...props}
    />
  );
};
