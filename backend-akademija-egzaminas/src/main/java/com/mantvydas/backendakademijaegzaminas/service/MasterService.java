package com.mantvydas.backendakademijaegzaminas.service;

import com.mantvydas.backendakademijaegzaminas.model.Client;
import com.mantvydas.backendakademijaegzaminas.repo.MasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MasterService {

    private final MasterRepository masterRepository;

    @Autowired
    public MasterService(MasterRepository masterRepository) {
        this.masterRepository = masterRepository;
    }

    // Use the repository methods to perform database operations
    public Client saveMaster(Client client) {
        return masterRepository.save(client);
    }

    public Client createMaster(Client client) {
        return masterRepository.save(client);
    }

    public List<Client> getAllMasters() {
        return masterRepository.findAll();
    }
}
