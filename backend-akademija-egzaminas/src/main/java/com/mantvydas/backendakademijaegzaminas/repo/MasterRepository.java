package com.mantvydas.backendakademijaegzaminas.repo;

import com.mantvydas.backendakademijaegzaminas.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MasterRepository extends JpaRepository<Client, Long> {

}
