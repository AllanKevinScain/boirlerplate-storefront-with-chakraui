import React from 'react';
import { HeaderInterface } from '@plugins/interfaces';
import { StyledHeader } from './header';

const Header: React.FC<HeaderInterface> = props => {
  return <StyledHeader {...props} />;
};

export default Header;
