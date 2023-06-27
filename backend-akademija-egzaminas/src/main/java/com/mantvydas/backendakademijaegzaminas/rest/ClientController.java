package com.mantvydas.backendakademijaegzaminas.rest;

import com.mantvydas.backendakademijaegzaminas.model.Client;
import com.mantvydas.backendakademijaegzaminas.service.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/client")
public class ClientController {

    private final ClientService clientService;

//    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/get-clients")
    public ResponseEntity<List<Client>> getAllClients () {
        return ResponseEntity.ok(clientService.getAllClients());
    }


    @PostMapping("/create-client")

    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        Client createdClient = clientService.createClient(client);
        return ResponseEntity.ok(createdClient);
    }
}
