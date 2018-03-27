import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';

export const Header = ({ children }) =>
  <Box
    tag='header'
    background='brand'
    align='center'
    pad={{
      horizontal: 'medium'
    }}
  >
    {children}
  </Box>;

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
