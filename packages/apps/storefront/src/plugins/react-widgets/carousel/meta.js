import { mergeDefaultConfig } from '@oracle-cx-commerce/react-widgets/config';
import config from './config';

export default {
  fetchers: [],
  type: 'container',
  actions: [],
  resources: {},
  config: mergeDefaultConfig(config)
};
