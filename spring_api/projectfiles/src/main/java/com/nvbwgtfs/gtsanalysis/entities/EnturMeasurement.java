package com.nvbwgtfs.gtsanalysis.entities;

import java.math.BigDecimal;
import java.util.Date;

public class EnturMeasurement {

    private String timestamp;
    private BigDecimal tripMatchRate;

    private BigDecimal routeMatchRate;

    private BigDecimal numberOfUpdates;

    public EnturMeasurement() {
    }

    public EnturMeasurement(String timestamp, BigDecimal tripMatchRate, BigDecimal routeMatchRate, BigDecimal numberOfUpdates) {
        this.timestamp = timestamp;
        this.tripMatchRate = tripMatchRate;
        this.routeMatchRate = routeMatchRate;
        this.numberOfUpdates = numberOfUpdates;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public BigDecimal getTripMatchRate() {
        return tripMatchRate;
    }

    public void setTripMatchRate(BigDecimal tripMatchRate) {
        this.tripMatchRate = tripMatchRate;
    }

    public BigDecimal getRouteMatchRate() {
        return routeMatchRate;
    }

    public void setRouteMatchRate(BigDecimal routeMatchRate) {
        this.routeMatchRate = routeMatchRate;
    }

    public BigDecimal getNumberOfUpdates() {
        return numberOfUpdates;
    }

    public void setNumberOfUpdates(BigDecimal numberOfUpdates) {
        this.numberOfUpdates = numberOfUpdates;
    }

    @Override
    public String toString() {
        return "EnturMeasurement{" +
                "timestamp=" + timestamp +
                ", tripMatchRate=" + tripMatchRate +
                ", routeMatchRate=" + routeMatchRate +
                ", numberOfUpdates=" + numberOfUpdates +
                '}';
    }
}
