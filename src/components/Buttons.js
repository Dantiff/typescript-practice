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
    <h2>Sample Button Componnets</h2>
    <p>Below is a sample implementation of the button components:</p>
    <ul className="demo__links">
      <li>
        <NavLink to={`/buttons/standard-buttons`}>Standard Buttons</NavLink>
      </li>
      <li>
        <NavLink to={`/buttons/outline-buttons`}>Outline Buttons</NavLink>
      </li>
    </ul>

    <Switch>
      <CrumbRoute
        title="Standard Buttons"
        path={`/buttons/standard-buttons`}
        render={props => <Event name="Standard Buttons" />}
      />
      <CrumbRoute
        title="Outline Buttons"
        path={`/buttons/outline-buttons`}
        render={props => <Event name="Outline Buttons" />}
      />
    </Switch>
  </div>
);
