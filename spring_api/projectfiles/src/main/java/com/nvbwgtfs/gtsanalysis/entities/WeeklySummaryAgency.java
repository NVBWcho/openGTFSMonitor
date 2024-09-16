package com.nvbwgtfs.gtsanalysis.entities;

import java.math.BigDecimal;

public class WeeklySummaryAgency {

    private String agency;
    private BigDecimal zeroUpdateFraction;

    public WeeklySummaryAgency() {
    }

    public WeeklySummaryAgency(String agency, BigDecimal zeroUpdateFraction) {
        this.agency = agency;
        this.zeroUpdateFraction = zeroUpdateFraction;
    }

    public String getAgency() {
        return agency;
    }

    public void setAgency(String agency) {
        this.agency = agency;
    }

    public BigDecimal getZeroUpdateFraction() {
        return zeroUpdateFraction;
    }

    public void setZeroUpdateFraction(BigDecimal zeroUpdateFraction) {
        this.zeroUpdateFraction = zeroUpdateFraction;
    }

    @Override
    public String toString() {
        return "WeeklySummaryAgency{" +
                "agency='" + agency + '\'' +
                ", zeroUpdateFraction=" + zeroUpdateFraction +
                '}';
    }
}
