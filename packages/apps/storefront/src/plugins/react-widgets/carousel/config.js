import { createWidgetConfig, WidgetProperty } from '@core/widgets/config';

export default createWidgetConfig([
  new WidgetProperty(
    'slideDuration',
    WidgetProperty.NUMBER_TYPE,
    'Velocidade da reprodução automática',
    'Define a velocidade da reprodução automática em milissegundos(3000ms = 3s)',
    '2500'
  ),
  new WidgetProperty('inLoop', WidgetProperty.BOOLEAN_TYPE, 'Loop', 'Define se o carrosel terá fim', true),
  new WidgetProperty(
    'effect',
    WidgetProperty.STRING_TYPE,
    'Efeitos',
    'Define alguns efeitos ao trocar o slide (fade, cube, coverflow, flip, cards, creative)',
    'fade'
  )
]);
