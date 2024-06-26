package com.keiken.localExplorer.controller;

import com.keiken.localExplorer.entity.Proposition;
import com.keiken.localExplorer.entity.User;
import com.keiken.localExplorer.exception.ResourceNotFoundException;
import com.keiken.localExplorer.repository.PropositionRepository;
import com.keiken.localExplorer.repository.UserRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/localExplorer/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PropositionRepository propositionRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/users")
    public Integer createUser(@RequestBody User user) {

        userRepository.save(user);
        String[] propositionGPTAI = StringUtils.substringsBetween(user.getPropositionGPT(), ".", ".");
        List<Proposition> propositions = new ArrayList<>();

        for (String p : propositionGPTAI) {
            Proposition proposition = new Proposition();

            proposition.setContent(p);
            proposition.setUser(user);

            propositionRepository.save(proposition);
            propositions.add(proposition);
        }
        user.setPropositions(propositions);
        List<String> result=new ArrayList<>();

        for(Proposition p:user.getPropositions()){
            result.add(p.getContent());
        }

        return user.getId();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
        return ResponseEntity.ok(user);
    }




}

