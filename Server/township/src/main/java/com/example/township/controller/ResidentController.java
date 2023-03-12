package com.example.township.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.township.model.Resident;
import com.example.township.repository.ResidentRepository;

@RestController
@EnableAutoConfiguration
@RequestMapping("/")
public class ResidentController {

	
	@Autowired
	private ResidentRepository residentRepository;
	
	//get all resident
	
	@GetMapping("/residents")
	public List<Resident> getAllResident(){
		return residentRepository.findAll();
	}







}
