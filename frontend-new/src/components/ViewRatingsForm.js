import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewRatingsForm() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    // Fetch the list of clients from the Spring API
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/client/get-clients');
        setClients(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a GET request to the API endpoint with the selected client's ID
      const response = await axios.get(`http://localhost:8080/api/v1/ratings?clientId=${selectedClient}`);

      // Set the ratings received from the API response
      setRatings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>View Ratings for All Masters by Clients</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="client">Select Client:</label>
          <select
            id="client"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            <option value="">Select a client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={!selectedClient}>
          View Ratings
        </button>
      </form>

      {/* Display the ratings */}
      {ratings.length > 0 && (
        <div>
          <h3>Ratings:</h3>
          <ul>
            {ratings.map((rating) => (
              <li key={rating.id}>
                <p>Master: {rating.master}</p>
                <p>Rating: {rating.rating}</p>
                <p>Comment: {rating.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ViewRatingsForm;
