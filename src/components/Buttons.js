// Import External Dependencies
import React from 'react';
import { Switch, NavLink } from 'react-router-dom';

// Import Components
import { CrumbRoute } from '@tkxs/cast-ui';

// Define a small event page
const Event = props => (
  <div className="event">
    <h3>{props.name}</h3>
    <p>More information about the {props.name} here ...</p>
  </div>
);

// Create and export the component
export default ({ location, match, ...props }) => (
  <div className="friends">
    <h2>Upcoming Events</h2>
    <p>These events are coming up soon...</p>
    <ul>
      <li>
        <NavLink to={`/standard-buttons`}>Dance</NavLink>
      </li>
      <li>
        <NavLink to={`/outline-buttons`}>Cookout</NavLink>
      </li>
    </ul>

    <Switch>
      <CrumbRoute
        title="Standard Buttons"
        path={`/standard-buttons`}
        render={props => <Event name="Standard Buttons" />}
      />
      <CrumbRoute
        title="Outline Buttons"
        path={`/outline-buttons`}
        render={props => <Event name="Outline Buttons" />}
      />
    </Switch>
  </div>
);
