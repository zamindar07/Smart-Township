package com.example.township.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.township.model.Complain;
import com.example.township.repository.ComplainRepository;

@RestController
@RequestMapping("/")
public class ComplainController {

	@Autowired
	private ComplainRepository complainRepository;

	public ComplainController() {

	}

	public void setComplainRepository(ComplainRepository complainRepository) {
		this.complainRepository = complainRepository;
	}

	@GetMapping("/Complains")
	public List<Complain> getAllComplain(){
		return complainRepository.findAll();
	}

}

