import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import CreateClientForm from './CreateClientForm';
import CreateMasterForm from './CreateMasterForm';
import CreateRatingForm from './CreateRatingForm';

const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/create-client">Create Client</Link>
          </li>
          <li>
            <Link to="/create-master">Create Master</Link>
          </li>
          <li>
            <Link to="/create-rating">Create Client's Rating</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/create-client" element={<CreateClientForm />} />
        <Route path="/create-master" element={<CreateMasterForm />} />
        <Route path="/create-rating" element={<CreateRatingForm />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
