package com.example.township.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Admins")
public class Admin {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long admin_id;
	@Column(name="firstname")
	private String firstname;
	@Column(name="lastname")
	private String	lastName;
	@Column(name="adminUserName")
	private String adminUserName;
	@Column(name="password")
	private String password;
	@Column(name="emailid")
	private String emailid;
	@Column(name="designation")
	private String designation; 

	//default constructor
	public Admin() {

	}
	//para constructor 
	public Admin(String firstname, String lastName, String adminUserName, String password, String emailid,
			String designation) {
		super();
		this.firstname = firstname;
		this.lastName = lastName;
		this.adminUserName = adminUserName;
		this.password = password;
		this.emailid = emailid;
		this.designation = designation;
	}
	//getters & setters
	public long getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(long admin_id) {
		this.admin_id = admin_id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getAdminUserName() {
		return adminUserName;
	}
	public void setAdminUserName(String adminUserName) {
		this.adminUserName = adminUserName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}


}


