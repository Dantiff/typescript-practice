import React from 'react';

import { BreadcrumbsItem } from '@tkxs/cast-ui';

export const Events = ({ children }) => (
  <div>
    <BreadcrumbsItem glyph="calendar" to={'/events'}>
      Events
    </BreadcrumbsItem>
    <h2>Events tool Page</h2>
  </div>
);

export const Statistics = ({ children }) => (
  <div>
    <BreadcrumbsItem glyph="signal" to={'/statistics'}>
      Statistics
    </BreadcrumbsItem>
    <h2>Statistics tool Page</h2>
  </div>
);

export const Settings = ({ children }) => (
  <div>
    <BreadcrumbsItem glyph="wrench" to={'/settings'}>
      Settings
    </BreadcrumbsItem>
    <h2>Settings tool Page</h2>
  </div>
);
