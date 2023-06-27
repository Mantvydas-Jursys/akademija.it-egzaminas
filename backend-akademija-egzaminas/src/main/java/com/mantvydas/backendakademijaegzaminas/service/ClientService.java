package com.mantvydas.backendakademijaegzaminas.service;

import com.mantvydas.backendakademijaegzaminas.model.Client;
import com.mantvydas.backendakademijaegzaminas.repo.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    // Use the repository methods to perform database operations
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    public List<Client> getAllClients() {
        // Implement the logic to fetch all meals from the data source
        // For example:
        return clientRepository.findAll();
    }

    public Client createClient(Client client) {
        return clientRepository.save(client);
    }
}
