package com.nvbwgtfs.gtsanalysis.service;

import com.nvbwgtfs.gtsanalysis.entities.EnturMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.HourlyAggregate;
import com.nvbwgtfs.gtsanalysis.entities.NVBWMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.WeeklySummaryAgency;

import java.util.List;
import java.util.Optional;

public interface GtfsService {




    Optional<List<HourlyAggregate>> getGTFSHourlySummary();











    Optional<List<WeeklySummaryAgency>> getWeeklyAgencySummary();




}
