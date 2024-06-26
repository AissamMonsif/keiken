package com.keiken.localExplorer.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private int id;
    private String name;
    private String location;
    private String weather;
    @Column(length = 65555)
    private String propositionGPT;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Proposition> propositions;

    public User(String name) {
        this.name = name;
    }

    public User() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public String getPropositionGPT() {
        return propositionGPT;
    }

    public void setPropositionGPT(String propositionGPT) {
        this.propositionGPT = propositionGPT;
    }

    public List<Proposition> getPropositions() {
        return propositions;
    }

    public void setPropositions(List<Proposition> propositions) {
        this.propositions = propositions;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                ", weather='" + weather + '\'' +
                //", propositionGPT='" + propositionGPT + '\'' +
                //", propositions=" + propositions +
                '}';
    }
}

