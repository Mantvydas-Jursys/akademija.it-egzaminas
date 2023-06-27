package com.mantvydas.backendakademijaegzaminas.rest;

import com.mantvydas.backendakademijaegzaminas.model.Client;
import com.mantvydas.backendakademijaegzaminas.service.MasterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/master")
public class MasterController {

    private final MasterService masterService;

//    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/get-masters")
    public ResponseEntity<List<Client>> getAllMasters () {
        return ResponseEntity.ok(masterService.getAllMasters());
    }


    @PostMapping("/create-master")

    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        Client createdClient = masterService.createMaster(client);
        return ResponseEntity.ok(createdClient);
    }
}
