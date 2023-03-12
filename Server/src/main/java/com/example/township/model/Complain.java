package com.example.township.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Complaints")
public class Complain {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ManyToOne
	
	private long complaintId;
	@Column(name="user_Id")
	private long userId;
	@Column(name="Description")
	private String description;
	//TO save date only date type is being saved here 
	//and Find Solution to save date&time without using 
	// LocalDateTime class
	@Column(name="Date")
	private Date dateofComplain;		
	@Column(name="Staus")
	private String status;
	@Column(name="Type_Of_Complain")
	private String type;
	
	//default constructor
	public Complain () {
		
	}

	//para constructor
	public Complain(long userId, String description, Date dateofComplain, String status, String type) {
		super();
		this.userId = userId;
		this.description = description;
		this.dateofComplain = dateofComplain;
		this.status = status;
		this.type = type;
	}

	public long getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(long complaintId) {
		this.complaintId = complaintId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDateofComplain() {
		return dateofComplain;
	}
	public void setDateofComplain(Date dateofComplain) {
		this.dateofComplain = dateofComplain;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
}