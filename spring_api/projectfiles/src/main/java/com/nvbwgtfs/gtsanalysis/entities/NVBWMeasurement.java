package com.nvbwgtfs.gtsanalysis.entities;

import java.math.BigDecimal;
import java.util.Date;

public class NVBWMeasurement {

    private String timestamp;
    private BigDecimal tripMatchRate;

    private BigDecimal routeMatchRate;

    private BigDecimal numberOfUpdates;

    private BigDecimal adjustedMatchRate;

    @Override
    public String toString() {
        return "NVBWMeasurement{" +
                "timestamp=" + timestamp +
                ", tripMatchRate=" + tripMatchRate +
                ", routeMatchRate=" + routeMatchRate +
                ", numberOfUpdates=" + numberOfUpdates +
                ", adjustedMatchRate=" + adjustedMatchRate +
                '}';
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

    public BigDecimal getAdjustedMatchRate() {
        return adjustedMatchRate;
    }

    public void setAdjustedMatchRate(BigDecimal adjustedMatchRate) {
        this.adjustedMatchRate = adjustedMatchRate;
    }

    public NVBWMeasurement() {
    }

    public NVBWMeasurement(String timestamp, BigDecimal tripMatchRate, BigDecimal routeMatchRate, BigDecimal adjustedMatchRate) {
        this.timestamp = timestamp;
        this.tripMatchRate = tripMatchRate;
        this.routeMatchRate = routeMatchRate;
        this.adjustedMatchRate = adjustedMatchRate;
    }






}
