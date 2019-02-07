import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CrumbIconItem = ({ to, glyph, children, ...props }) => (
  <Link to={to}>
    <Breadcrumb.Item {...props}>
      {glyph ? <span>{children}</span> : children}
    </Breadcrumb.Item>
  </Link>
);

export default CrumbIconItem;
