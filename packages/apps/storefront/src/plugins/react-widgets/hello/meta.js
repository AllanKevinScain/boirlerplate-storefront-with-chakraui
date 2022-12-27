import { mergeDefaultConfig } from '@oracle-cx-commerce/react-widgets/config';
import config from './config';

export default {
  name: '_Hello',
  fetchers: [],
  actions: [],
  resources: {},
  config: mergeDefaultConfig(config)
};
