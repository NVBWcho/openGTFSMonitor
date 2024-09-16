package com.nvbwgtfs.gtsanalysis.service;

import com.nvbwgtfs.gtsanalysis.entities.EnturMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.HourlyAggregate;
import com.nvbwgtfs.gtsanalysis.entities.NVBWMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.WeeklySummaryAgency;
import com.nvbwgtfs.gtsanalysis.repository.GtfsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GtfsServiceImpl implements  GtfsService {

    @Autowired
    private GtfsRepository gtfsRepository;


    @Override
    public Optional<List<NVBWMeasurement>> getNVBWMeasurements() {
        return gtfsRepository.getNVBWMeasurement();
    }

    @Override
    public Optional<List<EnturMeasurement>> getEnturMeasurements() {
        return gtfsRepository.getEnturMeasurement();
    }

    @Override
    public Optional<List<HourlyAggregate>> getGTFSHourlySummary() {
       return gtfsRepository.getGTFSHourlySummary();
    }

    @Override
    public Optional<List<HourlyAggregate>> getMiGTFSHourlySummary() {
        return gtfsRepository.getMiGTFSHourlySummary();
    }

    @Override
    public Optional<List<NVBWMeasurement>> getWeeksNVBWMeasurements() {
        return gtfsRepository.getWeeksNVBWMeasurement();
    }

    @Override
    public Optional<List<NVBWMeasurement>> getWeeksMiNVBWMeasurements() {
        return gtfsRepository.getWeeksMiNVBWMeasurement();
    }

    @Override
    public Optional<List<WeeklySummaryAgency>> getWeeklyAgencySummary() {
        return gtfsRepository.getWeeklySummmaryAgency();
    }

    @Override
    public Optional<List<WeeklySummaryAgency>> getMiWeeklyAgencySummary() {
        return gtfsRepository.getMiWeeklySummmaryAgency();
    }
}
