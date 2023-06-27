package com.mantvydas.backendakademijaegzaminas.service;

import com.mantvydas.backendakademijaegzaminas.model.Master;
import com.mantvydas.backendakademijaegzaminas.repo.MasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MasterService {

    private final MasterRepository masterRepository;

    @Autowired
    public MasterService(MasterRepository masterRepository) {
        this.masterRepository = masterRepository;
    }

    // Use the repository methods to perform database operations
    public Master saveMaster(Master master) {
        return masterRepository.save(master);
    }
}
