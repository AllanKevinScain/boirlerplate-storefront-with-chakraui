import React from 'react';
import { CenteringComponent } from '@plugins/react-components';
import { BannerWidget } from './banner';

export default props => {
  return (
    <CenteringComponent pt="4.5">
      <BannerWidget {...props} />
    </CenteringComponent>
  );
};
