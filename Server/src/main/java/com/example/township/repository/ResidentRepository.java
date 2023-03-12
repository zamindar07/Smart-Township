 package com.example.township.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.township.model.Resident;
@Repository
public interface ResidentRepository extends JpaRepository<Resident, Long> {

}