package com.drivingschool.drivingschoolapi.repository;

import com.drivingschool.drivingschoolapi.domain.CarStatistics;
import com.drivingschool.drivingschoolapi.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query("SELECT " +
            "   new com.drivingschool.drivingschoolapi.domain.CarStatistics ( c.car, COUNT(c) ) " +
            "FROM " +
            "    Client c " +
            "GROUP BY " +
            "    c.car")
    List<CarStatistics> findCarStatistics();
    
    
}
