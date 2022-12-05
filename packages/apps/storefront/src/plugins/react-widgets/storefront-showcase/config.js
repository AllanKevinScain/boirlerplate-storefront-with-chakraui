import { createWidgetConfig, WidgetProperty } from '@core/widgets/config';

export default createWidgetConfig([
  new WidgetProperty(
    'strategy',
    WidgetProperty.STRATEGY_TYPE,
    'Estrategia de marketing',
    'Define a estrategia de marketing das recomendacoes',
    'Top Sellers'
  ),
  new WidgetProperty(
    'title',
    WidgetProperty.STRATEGY_TYPE,
    'Titulo da vitrine',
    'Define o titulo da vitrine',
    'Produtos com desconto'
  ),
  new WidgetProperty(
    'contentViewCollection',
    WidgetProperty.STRATEGY_TYPE,
    'Frase do link para ver toda a vitrine',
    'Define a frase do link para ver toda a vitrine',
    'Ver Todas'
  ),
  new WidgetProperty(
    'isViewCollectionVisible',
    WidgetProperty.BOOLEAN_TYPE,
    'Mostrar o link para ver toda a vitrine',
    'Define se ira ou nao aparecer o link para ver toda a vitrine',
    'Ver Todas'
  )
]);
