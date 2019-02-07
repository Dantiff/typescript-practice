import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Events, Statistics, Settings } from './ToolsPages';

import { BreadcrumbsItem, Panel, Themes } from '@tkxs/cast-ui';

const Tools = ({ children }) => (
  <div>
    <BreadcrumbsItem glyph="cog" to={'/tools'}>
      <b>Tools</b>
    </BreadcrumbsItem>

    <h1>Tools</h1>

    <div>
      <Switch>
        <Route exact path={`/tools/events`} component={Events} />
        <Route exact path={`/tools/statistics`} component={Statistics} />
        <Route exact path={`/tools/settings`} component={Settings} />
        <Route render={() => <b>Choose tool from menu</b>} />
      </Switch>
    </div>
  </div>
);

export default Tools;
