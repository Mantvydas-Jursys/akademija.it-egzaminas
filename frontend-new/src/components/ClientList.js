import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ClientList = () => {
    const [clients, setClients] = useState([]);
  
    // Fetch the client data when the component mounts
    useEffect(() => {
      fetchClients();
    }, []);
  
    // Function to fetch the client data from the API endpoint
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/client/get-clients');
        console.log(response)
        setClients(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <h2>Client List</h2>

        

        {clients.map((client) => (
          <div key={client.id}>
            <p>Name: {client.name}</p>
            <p>Email: {client.email}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ClientList;
  