// MainPage.js
import React, { useState } from 'react';
import CreateClientForm from './CreateClientForm';
import CreateMasterForm from './CreateMasterForm';
import CreateRatingForm from './CreateRatingForm';

import Navbar from './Navbar';


const MainPage = () => {
  const [action, setAction] = useState('');

  const handleCreateClient = () => {
    setAction('create-client');
  };

  const handleCreateMaster = () => {
    setAction('create-master');
  };

  const handleCreateRating = () => {
    setAction('create-rating');
  };

  const renderContent = () => {
    switch (action) {
      case 'create-client':
        return <CreateClientForm />;
      case 'create-master':
        return <CreateMasterForm />;
      case 'create-rating':
        return <CreateRatingForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <section>{renderContent()}</section>
    </div>
  );
};

export default MainPage;
