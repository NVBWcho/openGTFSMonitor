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
    public Optional<List<HourlyAggregate>> getGTFSHourlySummary() {
       return gtfsRepository.getGTFSHourlySummary();
    }







    @Override
    public Optional<List<WeeklySummaryAgency>> getWeeklyAgencySummary() {
        return gtfsRepository.getWeeklySummmaryAgency();
    }


}
