import React from 'react';

import { BreadcrumbsItem } from '@tkxs/cast-ui';

const Profile = ({ children }) => (
  <div>
    <BreadcrumbsItem glyph="user" to={'/profile'}>
      Profile
    </BreadcrumbsItem>

    <h1>Profile</h1>
  </div>
);

export default Profile;
