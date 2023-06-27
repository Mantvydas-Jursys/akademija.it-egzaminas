package com.mantvydas.backendakademijaegzaminas.model;


import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rating;

    @ManyToOne
    private Client client;

    @ManyToMany
    @JoinTable(
            name = "master_service_rating",
            joinColumns = @JoinColumn(name = "rating_id"),
            inverseJoinColumns = @JoinColumn(name = "master_id")
    )
    private Set<Master> masters = new HashSet<>();

    public Rating () {

    }

    public Rating(Long id, int rating, Client client, Set<Master> masters) {
        this.id = id;
        this.rating = rating;
        this.client = client;
        this.masters = masters;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Set<Master> getMasters() {
        return masters;
    }

    public void setMasters(Set<Master> masters) {
        this.masters = masters;
    }

    @Override
    public String toString() {
        return "Rating{" +
                "id=" + id +
                ", rating=" + rating +
                ", client=" + client +
                ", masters=" + masters +
                '}';
    }
}
