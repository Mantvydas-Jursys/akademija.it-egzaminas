import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/client/get-clients');
            setClients(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <select>
            {clients.map(client => (
                <option key={client.id} value={client.id}>
                    {client.name}
                </option>
            ))}
        </select>
    );
};

export default ClientList;