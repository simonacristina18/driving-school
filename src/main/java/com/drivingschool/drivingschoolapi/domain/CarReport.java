package com.drivingschool.drivingschoolapi.domain;

import java.util.List;

public class CarReport {
    
    private List<CarStatistics> carStatistics;
    private Long total;

    public CarReport(List<CarStatistics> carStatistics, Long total) {
        this.carStatistics = carStatistics;
        this.total = total;
    }

    public List<CarStatistics> getCarStatistics() {
        return carStatistics;
    }

    public void setCarStatistics(List<CarStatistics> carStatistics) {
        this.carStatistics = carStatistics;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
