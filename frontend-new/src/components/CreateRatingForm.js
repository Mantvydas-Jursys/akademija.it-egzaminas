// CreateRatingForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateRatingForm = () => {
  const [clients, setClients] = useState([]);
  const [masters, setMasters] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsResponse = await axios.get('/clients');
        setClients(clientsResponse.data);

        const mastersResponse = await axios.get('/masters');
        setMasters(mastersResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ratingData = {
      clientId: selectedClient,
      masterId: selectedMaster,
      rating: rating,
    };

    try {
      const response = await axios.post('/ratings', ratingData);
      console.log(response.data); // handle the response as needed
    } catch (error) {
      console.error(error);
    }

    // Reset form fields
    setSelectedClient('');
    setSelectedMaster('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="client">Client:</label>
      <select
        id="client"
        value={selectedClient}
        onChange={(event) => setSelectedClient(event.target.value)}
      >
        <option value="">Select a client</option>
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </select>

      <label htmlFor="master">Master:</label>
      <select
        id="master"
        value={selectedMaster}
        onChange={(event) => setSelectedMaster(event.target.value)}
      >
        <option value="">Select a master</option>
        {masters.map((master) => (
          <option key={master.id} value={master.id}>
            {master.name}
          </option>
        ))}
      </select>

      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        min="1"
        max="5"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />

      <button type="submit">Submit Rating</button>
    </form>
  );
};

export default CreateRatingForm;