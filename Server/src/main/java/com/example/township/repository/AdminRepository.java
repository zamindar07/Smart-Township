package com.example.township.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.township.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository <Admin, Long>{

	List<Admin> findAll();

}
