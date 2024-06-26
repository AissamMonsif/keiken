package com.keiken.localExplorer.controller;

import com.keiken.localExplorer.entity.Proposition;
import com.keiken.localExplorer.entity.User;
import com.keiken.localExplorer.repository.PropositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/localExplorer/")
public class PropositionController {

    @Autowired
    PropositionRepository propositionRepository;

    @GetMapping("/propositions")
    public List<String> getAllPropositions() {
        List<Proposition> propositions = propositionRepository.findAll();
        List<String> props = new ArrayList<>();
        for (Proposition proposition : propositions) {
            props.add(proposition.getContent());
        }
        return props;
    }

    @GetMapping("/propositions/{id}")
    public List<String> getPropositionsByUserId(@PathVariable int id) {
        List<String> propositions = new ArrayList<>();
        List<Proposition> allPropositions = propositionRepository.findAll();

        for (Proposition proposition : allPropositions) {
            if (proposition.getUser().getId() == id) {
                propositions.add(proposition.getContent());
            }
        }
        
        return propositions;
    }
}
