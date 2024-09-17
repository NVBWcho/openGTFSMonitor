package com.nvbwgtfs.gtsanalysis.controller;

import com.nvbwgtfs.gtsanalysis.entities.EnturMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.HourlyAggregate;
import com.nvbwgtfs.gtsanalysis.entities.NVBWMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.WeeklySummaryAgency;
import com.nvbwgtfs.gtsanalysis.repository.GtfsRepository;
import com.nvbwgtfs.gtsanalysis.service.GtfsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController

@RequestMapping("/")
public class GTFSController {

    @Autowired
    GtfsService gtfsService;













    @GetMapping("/hourlyUpdates")

    public  ResponseEntity<List<HourlyAggregate>> getHourlyAggregates(){
        Optional<List<HourlyAggregate>> gtfsrealtimeUpdates=gtfsService.getGTFSHourlySummary();
        if(gtfsrealtimeUpdates.isPresent()){
            return  new ResponseEntity<>(gtfsrealtimeUpdates.get(),HttpStatus.OK);
        }else {
            return  new ResponseEntity<>(HttpStatus.OK);
        }
    }



    @GetMapping("/agencyweekly")
    public  ResponseEntity<List<WeeklySummaryAgency>> getWeeklyAgencySummary(){
        Optional<List<WeeklySummaryAgency>> weeklySummaryAgencies=gtfsService.getWeeklyAgencySummary();
        if(weeklySummaryAgencies.isPresent()){
            return  new ResponseEntity<>(weeklySummaryAgencies.get(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }






}
