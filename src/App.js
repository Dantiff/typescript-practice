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
    console.log('we handle crumbs?');
    // Remove first crumb
    return crumbs.filter((c, i) => i !== 0);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <main className="demo__main">
            <h1>TKXS Cast UI</h1>
            <p>
              Components in this library must receive a theme object as
              documented. To achieve this, use the ThemeProvider, which is
              passed on from styled-components. If no theme is provided,
              components will fall back to a default theme.
            </p>
            <Breadcrumbs className="demo__crumbs" />
            <ul className="demo__links">
              <li>
                <NavLink to="/all-components">All Components</NavLink>
              </li>
              <li>
                <NavLink to="/buttons">Buttons</NavLink>
              </li>
            </ul>

            <div className="demo__content">
              <Switch>
                <Route path="/" exact component={Main} />
                <CrumbRoute
                  title="Home"
                  path="/all-components"
                  component={Main}
                />
                <CrumbRoute
                  title="Buttons"
                  path="/buttons"
                  component={Buttons}
                />
                <CrumbRoute
                  title="404 Not Found"
                  render={props => <span>Page not found...</span>}
                />
              </Switch>
            </div>
          </main>
        </header>
      </div>
    );
  }
}
