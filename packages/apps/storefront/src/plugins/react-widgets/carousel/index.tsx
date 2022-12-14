import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { getRegion } from '@oracle-cx-commerce/commerce-utils/selector';
import { useSelector } from '@oracle-cx-commerce/react-components/provider';
import Widget from '@oracle-cx-commerce/react-components/widget';
import { CenteringComponent } from '@plugins/react-components';
import { CarouselWidget } from './carousel';

export default props => {
  const { regions = [], effect, inLoop, slideDuration } = props;
  const [regionId] = regions;
  const { widgets = [] } = useSelector(getRegion, { regionId });

  return (
    <CenteringComponent>
      <CarouselWidget effect={effect} inLoop={inLoop} slideDuration={slideDuration}>
        {widgets.map((widgetId: string) => (
          <SwiperSlide key={widgetId}>
            <Widget widgetId={widgetId} />
          </SwiperSlide>
        ))}
      </CarouselWidget>
    </CenteringComponent>
  );
};
