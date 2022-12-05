import { createWidgetConfig, WidgetProperty } from '@core/widgets/config';

export default createWidgetConfig([
  new WidgetProperty('src', WidgetProperty.MEDIA_TYPE, 'Imagem', 'Imagem estatica', { src: 'banner.png' }),
  new WidgetProperty('height', WidgetProperty.STRING_TYPE, 'Altura', 'Altura da imagem', '100px'),
  new WidgetProperty('width', WidgetProperty.STRING_TYPE, 'Largura', 'Largura da imagem', '100%'),
  new WidgetProperty('hasAnimation', WidgetProperty.BOOLEAN_TYPE, 'Animacao', 'Com animacao', true),
  new WidgetProperty(
    'url',
    WidgetProperty.STRING_TYPE,
    'Link de navegacao',
    'Link de redirecionamento da image',
    'www.oracle.com/'
  )
]);
