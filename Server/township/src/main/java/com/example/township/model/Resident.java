package com.example.township.model;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "residents")
public class Resident {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long ResidentID;
	
	@Column(name = "First_Name")
	private String FirstName;
	@Column(name = "Last_name")
	private String LastName;
	@Column(name = "Resident_Login_ID")
	private String ResidentLoginID;
	@Column(name = "password")
	private String Password;
	@Column(name = "Contact_No")
	private String ContactNo;
	@Column(name = "Email_Id")
	private String EmailID;
	@Column(name = "Wing_No")
	private String WingNO;
	@Column(name = "floor")
	private String Floor;
	@Column(name = "Flat_No")
	private String FlatNo;
	

	

	
	public Resident() {
	
		
	}
	
	public Resident(String firstName, String lastName, String username, String password, String contactNo,
			String emailID, String wingNO, String floor, String flatNo) {
		super();
		FirstName = firstName;
		LastName = lastName;
		ResidentLoginID = username;
		Password = password;
		ContactNo = contactNo;
		EmailID = emailID;
		WingNO = wingNO;
		Floor = floor;
		FlatNo = flatNo;
	}
	public long getResidentID() 
	
	
	{
		return ResidentID;
	}
	public void setResidentID(long residentID) {
		ResidentID = residentID;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getUsername() {
		return ResidentLoginID;
	}
	public void setUsername(String username) {
		ResidentLoginID = username;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getContactNo() {
		return ContactNo;
	}
	public void setContactNo(String contactNo) {
		ContactNo = contactNo;
	}
	public String getEmailID() {
		return EmailID;
	}
	public void setEmailID(String emailID) {
		EmailID = emailID;
	}
	public String getWingNO() {
		return WingNO;
	}
	public void setWingNO(String wingNO) {
		WingNO = wingNO;
	}
	public String getFloor() {
		return Floor;
	}
	public void setFloor(String floor) {
		Floor = floor;
	}
	public String getFlatNo() {
		return FlatNo;
	}
	public void setFlatNo(String flatNo) {
		FlatNo = flatNo;
	}
	
}
