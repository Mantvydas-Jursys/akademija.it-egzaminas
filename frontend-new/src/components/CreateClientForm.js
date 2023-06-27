import React, { useState } from 'react';
import axios from 'axios';

function CreateClientForm() {
    const [name, setName] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Create the client object
        const newClient = { name };
  
        // Send a POST request to the API endpoint
        const response = await axios.post('http://localhost:8080/api/v1/client/create-client', newClient);
  
        // Log the response or perform any additional actions
        console.log(response.data);
  
        // Reset the form
        setName('');
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Create Client</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
  
  export default CreateClientForm;
  