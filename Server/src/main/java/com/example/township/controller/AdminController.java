package com.example.township.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.township.model.Admin;
import com.example.township.repository.AdminRepository;

@RestController
@RequestMapping ("/")
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepository;
	
	public AdminController() {
		// TODO Auto-generated constructor stub
	}
	
	public void setAdminRepository(AdminRepository adminRepository) {
		this.adminRepository = adminRepository;
	}
	
	@GetMapping("/Admins")
	public List<Admin> getAllAdmin(){
		return adminRepository.findAll();
	}
	
}
