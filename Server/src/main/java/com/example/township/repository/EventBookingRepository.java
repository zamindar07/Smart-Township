package com.example.township.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.township.model.EventBooking;

@Repository
public interface EventBookingRepository extends JpaRepository<EventBooking, Long>{
	
}
