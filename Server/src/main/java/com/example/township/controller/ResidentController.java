package com.example.township.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.township.model.Resident;
import com.example.township.repository.ResidentRepository;
import com.example.township.service.ResidentService;

@CrossOrigin(origins = "*")
@RestController
@EnableAutoConfiguration
@RequestMapping("/")
public class ResidentController {

	
	private static final String Resident = null;
	@Autowired
	private ResidentRepository residentRepository;
	
	//get all resident
	
	@GetMapping("/residents")
	public List<Resident> getAllResident(){
		return residentRepository.findAll();
		
	}


@PostMapping("/residents")
public Long createNewResident(@RequestBody Resident residents) {
	residentRepository.save(residents);
	return residents.getResidentID();
	
	
}

}
