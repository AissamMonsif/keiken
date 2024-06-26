package com.keiken.localExplorer.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "propositions")
public class Proposition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_proposition")
    private int id;
    @Column(length = 65555)
    private String content;
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    public Proposition(String content) {
        this.content = content;
    }

    public Proposition() {
    }

    public Proposition(String content, User user) {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Proposition{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", user=" + user.toString() +
                '}';
    }
}

