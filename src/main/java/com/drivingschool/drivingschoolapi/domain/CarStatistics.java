package com.drivingschool.drivingschoolapi.domain;

public class CarStatistics {
    private String car;

    private Long count;
    
    public CarStatistics(String car, Long count) {
        this.car = car;
        this.count = count;
        
    }

    public String getCar() {
        return car;
    }

    public void setCar(String car) {
        this.car = car;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
