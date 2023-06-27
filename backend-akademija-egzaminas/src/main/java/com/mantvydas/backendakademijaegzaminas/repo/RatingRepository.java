package com.mantvydas.backendakademijaegzaminas.repo;

import com.mantvydas.backendakademijaegzaminas.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface RatingRepository extends JpaRepository<Rating, Long> {

    @Query("SELECT AVG(r.ratingValue) FROM Rating r WHERE r.masterId = :masterId")
    Double getAverageRatingByMasterId(Long masterId);

}
