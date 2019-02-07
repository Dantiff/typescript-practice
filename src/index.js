import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import { Themes, BreadcrumbsProvider } from '@tkxs/cast-ui';
const newHistory = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <BreadcrumbsProvider>
      <Router history={newHistory}>
        <Route path="/" component={App} />
      </Router>
    </BreadcrumbsProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
