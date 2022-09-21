import { createWidgetConfig, WidgetProperty } from '@core/widgets/config';

export default createWidgetConfig([
  new WidgetProperty(
    'headerType',
    WidgetProperty.STRING_TYPE,
    'Tipo de cabeçalho, atualmente possui apenas no carrinho',
    'Altera o tipo de cabeçalho',
    'cart'
  ),
  new WidgetProperty(
    'contentTitle',
    WidgetProperty.STRING_TYPE,
    'título do Header do Carrinho',
    'Altera o título do Carrinho',
    'Carrinho'
  ),
  new WidgetProperty(
    'securyImagesIsVisible',
    WidgetProperty.BOOLEAN_TYPE,
    'Visibilidade das imagens de segurança',
    'Mostrar ou esconder as imagens de segurança da página',
    true
  ),
  new WidgetProperty(
    'logoIsVisible',
    WidgetProperty.BOOLEAN_TYPE,
    'Visibilidade da imagem do logo',
    'Mostrar ou esconder o logo do header',
    true
  ),
  new WidgetProperty(
    'titleIsVisible',
    WidgetProperty.BOOLEAN_TYPE,
    'Visibilidade do título no header',
    'Mostrar ou esconder o título do header',
    true
  ),
  new WidgetProperty(
    'logoContent',
    WidgetProperty.MEDIA_TYPE,
    'Imagem de logo da empresa',
    'Altera a imagem de logo da empres',
    { src: 'image.svg' }
  ),
  new WidgetProperty(
    'securyImagesContent',
    WidgetProperty.MEDIA_TYPE,
    'Imagens de segurança',
    'Alterar as imagens de segurança da página',
    { src: ['image1.svg', 'image2.png'] }
  )
]);
