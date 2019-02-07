// Import External Dependencies
import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

// Import Components
import { Breadcrumbs, CrumbRoute } from '@tkxs/cast-ui';
import Main from './components/Main';
import Buttons from './components/Buttons';

// Create and export the component
export default class App extends React.Component {
  /**
   * Handle breadcrumb render
   * @param {[{}]} crumbs
   * @return {[{}]}
   */
  handleCrumbs = crumbs => {
    // Remove first crumb
    return crumbs.filter((c, i) => i !== 0);
  };
  render() {
    return (
      <div className="demo">
        <Breadcrumbs className="demo__crumbs" />
        <main className="demo__main">
          <h1>Breadcrumbs Demo</h1>
          <p>
            Use the links below to jump around the site and watch the
            breadcrumbs update...
          </p>
          <ul className="demo__links">
            <li>
              <NavLink to="/home">Cast UI Components</NavLink>
            </li>
            <li>
              <NavLink to="/buttons">Buttons</NavLink>
            </li>
          </ul>

          <div className="demo__content">
            <Switch>
              <Route
                path="/"
                exact
                render={props => <span>Home content...</span>}
              />
              <CrumbRoute title="Home" path="/home" component={Main} />
              <CrumbRoute title="Buttons" path="/buttons" component={Buttons} />
              <CrumbRoute
                title="404 Not Found"
                render={props => <span>Page not found...</span>}
              />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
