import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateClientForm from './components/CreateClientForm';
import CreateMasterForm from './components/CreateMasterForm';
import CreateRatingForm from './components/CreateRatingForm';
import ViewRatingsForm from './components/ViewRatingsForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Menu</h1>
        <ul className="menu-list">
          <li>
            <Link to="/create-client">Create Client</Link>
          </li>
          <li>
            <Link to="/create-master">Create Master</Link>
          </li>
          <li>
            <Link to="/create-rating">Create Rating</Link>
          </li>
          <li>
            <Link to="/view-ratings">View Ratings</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/create-client" component={CreateClientForm} />
          <Route path="/create-master" component={CreateMasterForm} />
          <Route path="/create-rating" component={CreateRatingForm} />
          <Route path="/view-ratings" component={ViewRatingsForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
