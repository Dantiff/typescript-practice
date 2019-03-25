import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import Main from './components/Main';
import Buttons from './components/Buttons';

export default class App extends React.Component {
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
            {/* <Breadcrumbs
              BreadcrumbsContainer="nav"
              BreadcrumbItemContainer="span"
              separator="span"
              theme={Themes.defaultTheme}
            /> */}
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
                <Route path="/" title="Home" exact component={Main} />
                <Route
                  title="All Components"
                  path="/all-components"
                  component={Main}
                />
                <Route title="Buttons" path="/buttons" component={Buttons} />
                <Route
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
