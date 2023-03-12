package com.example.township.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Event_Bookings")
public class EventBooking {
		
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long bookingTicketId;
	@Column(name="user_Id")
	private long userId;
	@Column(name="Amenity_Type")
	private String amenityType;
	@Column(name="Description_Of_Event")
	private String descriptionOfEvent;
	//field to be fixed here is 
	//availablity of date requires validation from js frontend or a java function inside java class
	@Column(name="Available_date")
	private Date availabalityOfDate;
	@Column(name="Rates_Per_Day")
	private double ratesPerDay;
	@Column(name="Date_Of_Booking")
	private Date dateOfBooking;
	
	public EventBooking() {
		
	}

	public EventBooking(long userId, String amenityType, String descriptionOfEvent, Date availabalityOfDate,
			double ratesPerDay, Date dateOfBooking) {
		super();
		this.userId = userId;
		this.amenityType = amenityType;
		this.descriptionOfEvent = descriptionOfEvent;
		this.availabalityOfDate = availabalityOfDate;
		this.ratesPerDay = ratesPerDay;
		this.dateOfBooking = dateOfBooking;
	}

	public long getBookingTicketId() {
		return bookingTicketId;
	}
	public void setBookingTicketId(long bookingTicketId) {
		this.bookingTicketId = bookingTicketId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getAmenityType() {
		return amenityType;
	}
	public void setAmenityType(String amenityType) {
		this.amenityType = amenityType;
	}
	public String getDescriptionOfEvent() {
		return descriptionOfEvent;
	}
	public void setDescriptionOfEvent(String descriptionOfEvent) {
		this.descriptionOfEvent = descriptionOfEvent;
	}
	public Date getAvailabalityOfDate() {
		return availabalityOfDate;
	}
	public void setAvailabalityOfDate(Date availabalityOfDate) {
		this.availabalityOfDate = availabalityOfDate;
	}
	public double getRatesPerDay() {
		return ratesPerDay;
	}
	public void setRatesPerDay(double ratesPerDay) {
		this.ratesPerDay = ratesPerDay;
	}
	public Date getDateOfBooking() {
		return dateOfBooking;
	}
	public void setDateOfBooking(Date dateOfBooking) {
		this.dateOfBooking = dateOfBooking;
	}

}

