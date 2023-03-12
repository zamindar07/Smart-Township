package com.example.township.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.township.model.Complain;

@Repository
public interface ComplainRepository extends JpaRepository<Complain, Long>{

	
}