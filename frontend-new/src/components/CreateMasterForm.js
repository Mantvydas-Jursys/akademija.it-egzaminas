// CreateMasterForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateMasterForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const masterData = {
      name: name,
    };

    try {
      const response = await axios.post('/masters', masterData);
      console.log(response.data); // handle the response as needed
    } catch (error) {
      console.error(error);
    }

    // Reset form field
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button type="submit">Create Master</button>
    </form>
  );
};

export default CreateMasterForm;