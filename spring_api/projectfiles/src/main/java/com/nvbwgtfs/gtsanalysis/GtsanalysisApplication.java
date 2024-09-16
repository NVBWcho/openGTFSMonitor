package com.nvbwgtfs.gtsanalysis;

import com.nvbwgtfs.gtsanalysis.service.GtfsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GtsanalysisApplication implements CommandLineRunner {

	@Autowired
	private GtfsService gtfsService;

	public static void main(String[] args) {
		SpringApplication.run(GtsanalysisApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		//gtfsService.getNVBWMeasurements();
		//gtfsService.getEnturMeasurements();
		gtfsService.getGTFSHourlySummary();

	}
}
