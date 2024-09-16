package com.nvbwgtfs.gtsanalysis.entities;

import java.math.BigDecimal;

public class HourlyAggregate {

    private String timestamp;

    private Long numberOfTrips;

    private Long noUpdates;

    private Double zeroUpdateFraction;

    public HourlyAggregate() {
    }

    public HourlyAggregate(String timestamp, Long numberOfTrips, Long noUpdates, Double zeroUpdateFraction) {
        this.timestamp = timestamp;
        this.numberOfTrips = numberOfTrips;
        this.noUpdates = noUpdates;
        this.zeroUpdateFraction = zeroUpdateFraction;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public Long getNumberOfTrips() {
        return numberOfTrips;
    }

    public void setNumberOfTrips(Long numberOfTrips) {
        this.numberOfTrips = numberOfTrips;
    }

    public Long getNoUpdates() {
        return noUpdates;
    }

    public void setNoUpdates(Long noUpdates) {
        this.noUpdates = noUpdates;
    }

    public Double getZeroUpdateFraction() {
        return zeroUpdateFraction;
    }

    public void setZeroUpdateFraction(Double zeroUpdateFraction) {
        this.zeroUpdateFraction = zeroUpdateFraction;
    }

    @Override
    public String toString() {
        return "HourlyAggregate{" +
                "timestamp='" + timestamp + '\'' +
                ", numberOfTrips=" + numberOfTrips +
                ", noUpdates=" + noUpdates +
                ", zeroUpdateFraction=" + zeroUpdateFraction +
                '}';
    }
}
