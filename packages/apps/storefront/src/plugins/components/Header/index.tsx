import React from 'react';
import { HeaderInterface } from '@plugins/interfaces';
import { StyledHeader } from './header';

export const Header: React.FC<HeaderInterface> = props => {
  return <StyledHeader {...props} />;
};
