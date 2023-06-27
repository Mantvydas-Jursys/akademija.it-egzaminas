package com.mantvydas.backendakademijaegzaminas.config;


import com.mantvydas.backendakademijaegzaminas.model.Client;
import com.mantvydas.backendakademijaegzaminas.repo.ClientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataPopulator implements CommandLineRunner {

    private final ClientRepository clientRepository;

    public DataPopulator(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public void run(String... args) {
        Client client1 = new Client();
        client1.setName("John Doe");
        // Set other client properties

        Client client2 = new Client();
        // Set other client properties

        clientRepository.saveAll(Arrays.asList(client1, client2));
    }
}
