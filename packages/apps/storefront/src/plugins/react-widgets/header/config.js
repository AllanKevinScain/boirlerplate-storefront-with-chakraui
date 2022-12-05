import { createWidgetConfig, WidgetProperty } from '@core/widgets/config';

export default createWidgetConfig([
  new WidgetProperty(
    'headerType',
    WidgetProperty.STRING_TYPE,
    'Variante do Header',
    'Define o tipo de Header, cart-default',
    'cart'
  )
]);
