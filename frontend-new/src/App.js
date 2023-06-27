import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import CreateClientForm from './components/CreateClientForm';
import CreateMasterForm from './components/CreateMasterForm';
import CreateRatingForm from './components/CreateRatingForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create-client" element={<CreateClientForm />} />
        <Route path="/create-master" element={<CreateMasterForm />} />
        <Route path="/create-rating" element={<CreateRatingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
