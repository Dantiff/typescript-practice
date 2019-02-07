import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import MenuItem from './MenuItem';
import NavItem from './NavItem';
import GithubItem from './GithubItem';

export const TheNavbar = ({ children }) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="//github.com/oklas/react-breadcrumbs-dynamic">
          react-breadcrumbs-dynamic
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <NavItem glyph="home" to={'/'} eventKey={1}>
          Home
        </NavItem>

        <NavItem glyph="user" to={'/profile'} eventKey={2}>
          Profile
        </NavItem>

        <NavDropdown
          id="basic-nav-dropdown"
          eventKey={3}
          title={<span>Tools</span>}>
          <MenuItem glyph="calendar" to={'/tools/events'} eventKey={3.2}>
            Events
          </MenuItem>
          <MenuItem glyph="signal" to={'/tools/statistics'} eventKey={3.1}>
            Statistics
          </MenuItem>
          <MenuItem glyph="wrench" to={'/tools/settings'} eventKey={3.3}>
            Settings
          </MenuItem>
        </NavDropdown>
      </Nav>

      <Nav pullRight>
        <GithubItem
          action="Star"
          icon="octicon-star"
          key={1}
          to="https://github.com/oklas/react-breadcrumbs-dynamic"
        />
        <GithubItem
          action="Fork"
          icon="octicon-repo-forked"
          key={2}
          to="https://github.com/oklas/react-breadcrumbs-dynamic/fork"
        />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
