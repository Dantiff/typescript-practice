import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CrumbItem = ({ to, glyph, ...props }) => (
  <Link to={to}>
    <Breadcrumb.Item {...props} />
  </Link>
);

export default CrumbItem;
