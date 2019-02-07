import React from 'react';
// import { Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { base_path } from '../constants';

const itemFactory = Component => ({ to, glyph, children, ...props }) => (
  <Link to={to || base_path}>
    <Component {...props}>
      {/* { glyph && <Glyphicon glyph={glyph} /> } */}
      {children}
    </Component>
  </Link>
);

export default itemFactory;
