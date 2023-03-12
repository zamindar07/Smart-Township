package com.example.township.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.township.model.EventBooking;
import com.example.township.repository.EventBookingRepository;

@RestController
@EnableAutoConfiguration
@RequestMapping("/")
public class EventBookingController {

	@Autowired
	private EventBookingRepository eventBookings;

	public EventBookingController() {
	
	}

	public EventBookingController(EventBookingRepository eventBookings) {
		super();
		this.eventBookings = eventBookings;
	}
	
	@GetMapping("/EventBookings")
	public List<EventBooking> getAllEventbookings(){
		return eventBookings.findAll();
	}

}

