import React, { Component } from 'react';
import styled from 'styled-components';

const MenuItem = styled.div``;

const GithubItem = ({ to, action, key, icon }) => (
  <MenuItem eventKey={key}>
    <a
      className="github-button"
      data-icon={icon}
      data-show-count="true"
      href={to}
      aria-label={action + ' oklas/react-breadcrumbs-dynamic on GitHub'}>
      {action}
    </a>
  </MenuItem>
);

export default GithubItem;
