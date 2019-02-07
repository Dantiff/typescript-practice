import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap';
import { Breadcrumbs, BreadcrumbsItem } from '@tkxs/cast-ui';

import CrumbItem from './components/CrumbItem';
import CrumbIconItem from './components/CrumbIconItem';

import { TheNavbar } from './components/Navbar/Navbar';
import MainPage from './components/MainPage';
import Profile from './components/ProfilePage';
import Tools from './components/ToolsPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BreadcrumbsItem glyph="home" to={'/'}>
          Home Page
        </BreadcrumbsItem>

        {/* <TheNavbar /> */}

        <Breadcrumbs
          item={CrumbIconItem}
          container={BootstrapBreadcrumb}
          finalProps={{ active: true }}
          duplicateProps={{ to: 'href' }}
        />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/tools" component={Tools} />
        </Switch>

        <Breadcrumbs
          item={CrumbItem}
          container={BootstrapBreadcrumb}
          finalProps={{ active: true }}
          duplicateProps={{ to: 'href' }}
        />
      </div>
    );
  }
}

export default App;
