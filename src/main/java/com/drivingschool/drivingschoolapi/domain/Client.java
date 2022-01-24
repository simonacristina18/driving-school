package com.drivingschool.drivingschoolapi.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String address;
    private String car;
    private int carDrivingSchoolPrice;


    public Client(String firstName, String lastName, String email, String phoneNumber, String address, String car, int carDrivingSchoolPrice) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.car = car;
        this.carDrivingSchoolPrice = carDrivingSchoolPrice;
    }

    public Client(Long id, String firstName, String lastName, String email, String phoneNumber, String address, String car, int carDrivingSchoolPrice) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.car = car;
        this.carDrivingSchoolPrice = carDrivingSchoolPrice;
    }

    public Client() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCar() {
        return car;
    }

    public void setCar(String car) {
        this.car = car;
    }

    public int getCarDrivingSchoolPrice() {
        return carDrivingSchoolPrice;
    }

    public void setCarDrivingSchoolPrice(int carDrivingSchoolPrice) {
        this.carDrivingSchoolPrice = carDrivingSchoolPrice;
    }
}
