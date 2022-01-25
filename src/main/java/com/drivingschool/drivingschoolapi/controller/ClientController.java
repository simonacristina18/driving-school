package com.drivingschool.drivingschoolapi.controller;

import com.drivingschool.drivingschoolapi.domain.CarReport;
import com.drivingschool.drivingschoolapi.domain.CarStatistics;
import com.drivingschool.drivingschoolapi.domain.Client;
import com.drivingschool.drivingschoolapi.repository.ClientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/driving-school")
public class ClientController {

    private final ClientRepository clientRepository;

    public ClientController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping
    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    @GetMapping("/{id}")
    public Client getClient(@PathVariable Long id) {
        return clientRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping()
    public ResponseEntity createClient(@RequestBody Client client) throws URISyntaxException {
        Client savedClient = clientRepository.save(client);
        return ResponseEntity.created(new URI("/success/" + savedClient.getId())).body(savedClient);
    }

    @GetMapping("/reports")
    public ResponseEntity getCarStatistics() {
        List<CarStatistics> carStatistics = clientRepository.findCarStatistics();
        Long total = clientRepository.count();
        CarReport carReport = new CarReport(carStatistics, total);
        return ResponseEntity.ok(carReport);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity updateClient(@PathVariable Long id, @RequestBody User user) {
//        User currentUser = clientRepository.findById(id).orElseThrow(RuntimeException::new);
//        currentUser.setName(user.getName());
//        currentUser.setEmail(user.getEmail());
//        currentUser = clientRepository.save(user);
//
//        return ResponseEntity.ok(currentUser);
//    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity deleteClient(@PathVariable Long id) {
//        clientRepository.deleteById(id);
//        return ResponseEntity.ok().build();
//    }

}
