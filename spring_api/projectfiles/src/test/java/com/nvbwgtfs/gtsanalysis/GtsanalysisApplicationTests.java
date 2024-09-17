package com.nvbwgtfs.gtsanalysis;

import com.nvbwgtfs.gtsanalysis.entities.EnturMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.HourlyAggregate;
import com.nvbwgtfs.gtsanalysis.entities.NVBWMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.WeeklySummaryAgency;
import com.nvbwgtfs.gtsanalysis.service.GtfsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

@SpringBootTest
class GtsanalysisApplicationTests {
	@Autowired GtfsService gtfsService;

	@Test
	void contextLoads() {
	}

	@Test
	void testHourlyAggregates(){

      Optional<List<HourlyAggregate>> miaggregates=gtfsService.getGTFSHourlySummary();

	  for (int i=0;i<miaggregates.get().size();i++){
		  System.out.println(miaggregates.get().get(i));

	  }

	}



}
