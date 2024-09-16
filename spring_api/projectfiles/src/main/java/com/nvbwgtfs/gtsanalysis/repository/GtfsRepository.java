package com.nvbwgtfs.gtsanalysis.repository;

import com.nvbwgtfs.gtsanalysis.UnpackingException;
import com.nvbwgtfs.gtsanalysis.entities.EnturMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.HourlyAggregate;
import com.nvbwgtfs.gtsanalysis.entities.NVBWMeasurement;
import com.nvbwgtfs.gtsanalysis.entities.WeeklySummaryAgency;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class GtfsRepository {

    @PersistenceContext
    EntityManager entityManager;


    public Optional<List<NVBWMeasurement>> getNVBWMeasurement(){

        String queryStr= """
                 select timepoint, matchrate, total_updates, routes_match_rate, adjusted_match_rate
                 from realtime_analysis
                 where adjusted_match_rate is not NULL order by timepoint;
        
        
                """;

        try {
            Query query=entityManager.createNativeQuery(queryStr);
            List<Object> allresults=query.getResultList();

            List<NVBWMeasurement> nvbwMeasurements=new ArrayList<>();
            for (Object o:allresults){
                NVBWMeasurement nvbwMeasurement=unpackRowToNVBW((Object[]) o);
                nvbwMeasurements.add(nvbwMeasurement);
                System.out.println(nvbwMeasurement);

            }
            return Optional.of(nvbwMeasurements);


        }catch (Exception e){
            e.printStackTrace();
            return  Optional.empty();
        }


    }

    public Optional<List<NVBWMeasurement>> getWeeksNVBWMeasurement(){

        String queryStr= """
                 select timepoint, matchrate, total_updates, routes_match_rate, adjusted_match_rate
                 from realtime_analysis
                 where adjusted_match_rate is not NULL
                 and
                 timepoint >= CURRENT_TIMESTAMP - interval '7 days'
                 and timepoint <= CURRENT_TIMESTAMP
                 order by timepoint;
        
        
                """;

        try {
            Query query=entityManager.createNativeQuery(queryStr);
            List<Object> allresults=query.getResultList();

            List<NVBWMeasurement> nvbwMeasurements=new ArrayList<>();
            for (Object o:allresults){
                NVBWMeasurement nvbwMeasurement=unpackRowToNVBW((Object[]) o);
                nvbwMeasurements.add(nvbwMeasurement);
                System.out.println(nvbwMeasurement);

            }
            return Optional.of(nvbwMeasurements);


        }catch (Exception e){
            e.printStackTrace();
            return  Optional.empty();
        }

    }


    public Optional<List<NVBWMeasurement>> getWeeksMiNVBWMeasurement(){

        String queryStr= """
                 select timepoint, matchrate, total_updates, routes_match_rate, adjusted_match_rate
                 from mi_realtime_analysis
                 where adjusted_match_rate is not NULL
                 and
                 timepoint >= CURRENT_TIMESTAMP - interval '7 days'
                 and timepoint <= CURRENT_TIMESTAMP
                 order by timepoint;
        
        
                """;

        String altQuery= """
                WITH numbered_records AS (
                    SELECT\s
                        timepoint,\s
                        matchrate,\s
                        total_updates,\s
                        routes_match_rate,\s
                        adjusted_match_rate,
                        row_number() OVER (ORDER BY timepoint) as row_num
                    FROM mi_realtime_analysis
                    WHERE\s
                        adjusted_match_rate IS NOT NULL
                        AND timepoint >= CURRENT_TIMESTAMP - interval '7 days'
                        AND timepoint <= CURRENT_TIMESTAMP
                )
                SELECT\s
                    timepoint,\s
                    matchrate,\s
                    total_updates,\s
                    routes_match_rate,\s
                    adjusted_match_rate
                FROM numbered_records
                WHERE row_num % 5 = 0
                ORDER BY timepoint;
                                
                """;

        try {
            Query query=entityManager.createNativeQuery(altQuery);
            List<Object> allresults=query.getResultList();

            List<NVBWMeasurement> nvbwMeasurements=new ArrayList<>();
            for (Object o:allresults){
                NVBWMeasurement nvbwMeasurement=unpackRowToNVBW((Object[]) o);
                nvbwMeasurements.add(nvbwMeasurement);
                System.out.println(nvbwMeasurement);

            }
            return Optional.of(nvbwMeasurements);


        }catch (Exception e){
            e.printStackTrace();
            return  Optional.empty();
        }

    }


    public static NVBWMeasurement unpackRowToNVBW(Object[] datarow) throws UnpackingException {

        NVBWMeasurement nvbwMeasurement=new NVBWMeasurement();
        String pattern = "yyyy-MM-dd HH:mm:ss";

        DateFormat df = new SimpleDateFormat(pattern);
        Date inputDate=(Date) datarow[0];

        String simpleDateString =df.format(inputDate);
        nvbwMeasurement.setTimestamp(simpleDateString);


        nvbwMeasurement.setTripMatchRate((BigDecimal) datarow[1]);
        nvbwMeasurement.setNumberOfUpdates((BigDecimal) datarow[2] );
        nvbwMeasurement.setRouteMatchRate((BigDecimal) datarow[3]);
        nvbwMeasurement.setAdjustedMatchRate((BigDecimal) datarow[4]);



        return  nvbwMeasurement;
    }

    public static  EnturMeasurement unpackRowToEntur(Object [] datarow) throws UnpackingException{

        EnturMeasurement enturMeasurement=new EnturMeasurement();
        String pattern = "yyyy-MM-dd HH:mm:ss";

        DateFormat df = new SimpleDateFormat(pattern);
        Date inputDate=(Date) datarow[0];

        String simpleDateString =df.format(inputDate);
        enturMeasurement.setTimestamp(simpleDateString);
        enturMeasurement.setTripMatchRate((BigDecimal) datarow[1]);
        enturMeasurement.setNumberOfUpdates((BigDecimal) datarow[2] );
        enturMeasurement.setRouteMatchRate((BigDecimal) datarow[3]);
        return  enturMeasurement;
    }

    public  static HourlyAggregate unpackRowToHourlyAggregate(Object [] datarow){

        HourlyAggregate hourlyAggregate=new HourlyAggregate();
        String pattern = "yyyy-MM-dd HH:mm:ss";

        DateFormat df = new SimpleDateFormat(pattern);
        Date inputDate=(Date) datarow[0];

        String simpleDateString =df.format(inputDate);
        hourlyAggregate.setTimestamp(simpleDateString);
        hourlyAggregate.setNumberOfTrips((Long) datarow[1]);
        hourlyAggregate.setNoUpdates((Long) datarow[2] );
        hourlyAggregate.setZeroUpdateFraction((Double) datarow[3]);
        return hourlyAggregate;

    }




    public  Optional<List<EnturMeasurement>> getEnturMeasurement(){

        String queryStr= """
                 select timepoint, matchrate, total_updates, routes_match_rate, adjusted_match_rate
                 from entur_realtime_analysis
                 where adjusted_match_rate is not NULL order by timepoint;
        
        
                """;
        try{

            Query query=entityManager.createNativeQuery(queryStr);
            List<Object> allresults=query.getResultList();
            List<EnturMeasurement> enturMeasurements=new ArrayList<>();
            for (Object o:allresults){
                EnturMeasurement enturMeasurement=unpackRowToEntur((Object[]) o);
                enturMeasurements.add(enturMeasurement);
                System.out.println(enturMeasurements);

            }
            return Optional.of(enturMeasurements);


        }catch (Exception e){
            e.printStackTrace();
            return  Optional.empty();
        }

        }




    public  Optional<List<HourlyAggregate>> getGTFSHourlySummary(){

        String queryStr= """
                SELECT
                    date_trunc('hour', begin_time) AS hour,
                    COUNT(*) AS total_trips,
                    SUM(CASE WHEN number_of_updates = 0 THEN 1 ELSE 0 END) AS zero_update_trips,
                    CAST(SUM(CASE WHEN number_of_updates = 0 THEN 1 ELSE 0 END) AS float) / COUNT(*) AS zero_update_fraction
                FROM
                    schedule_updates
                WHERE
                    begin_time >= CURRENT_TIMESTAMP - interval '7 days'
                	AND begin_time <= CURRENT_TIMESTAMP
                GROUP BY
                    date_trunc('hour', begin_time)
                ORDER BY
                    hour;
                """;

        try{

            Query query=entityManager.createNativeQuery(queryStr);
            List<Object> allresults=query.getResultList();
            List<HourlyAggregate> hourlyAggregates=new ArrayList<>();
            for(Object o:allresults){
                Object [] row=(Object[]) o;

                HourlyAggregate hourlyAggregate=unpackRowToHourlyAggregate(row);
                hourlyAggregates.add(hourlyAggregate);
                //System.out.println(hourlyAggregate);



            }
            return Optional.of(hourlyAggregates);
        }catch (Exception e){
            e.printStackTrace();
            return  Optional.empty();
        }
    }


    public  Optional<List<HourlyAggregate>> getMiGTFSHourlySummary(){

        String queryStr= """
                SELECT
                    date_trunc('hour', begin_time) AS hour,
                    COUNT(*) AS total_trips,
                    SUM(CASE WHEN number_of_updates = 0 THEN 1 ELSE 0 END) AS zero_update_trips,
                    CAST(SUM(CASE WHEN number_of_updates = 0 THEN 1 ELSE 0 END) AS float) / COUNT(*) AS zero_update_fraction
                FROM
                    mi_schedule_updates
                WHERE
                    begin_time >= CURRENT_TIMESTAMP - interval '7 days'
                	AND begin_time <= CURRENT_TIMESTAMP
                GROUP BY
                    date_trunc('hour', begin_time)
                ORDER BY
                    hour;
                """;

        try{

            Query query=entityManager.createNativeQuery(queryStr);
            List<Object> allresults=query.getResultList();
            List<HourlyAggregate> hourlyAggregates=new ArrayList<>();
            for(Object o:allresults){
                Object [] row=(Object[]) o;

                HourlyAggregate hourlyAggregate=unpackRowToHourlyAggregate(row);
                hourlyAggregates.add(hourlyAggregate);
                //System.out.println(hourlyAggregate);



            }
            return Optional.of(hourlyAggregates);
        }catch (Exception e){
            e.printStackTrace();
            return  Optional.empty();
        }
    }

    public Optional<List<WeeklySummaryAgency>> getWeeklySummmaryAgency(){

        String queryStr= """
                select   agency, COUNT(CASE WHEN number_of_updates=0 THEN 1 END)*1.0/COUNT(*) AS fraction_no_updates
                from schedule_updates where
                begin_time >= CURRENT_TIMESTAMP - interval '7 days'
                	AND begin_time <= CURRENT_TIMESTAMP
                                
                group by agency
                order by fraction_no_updates ;
                """;

        try{

            Query query=entityManager.createNativeQuery(queryStr);
            List<Object> results=query.getResultList();
            List<WeeklySummaryAgency> weeklySummaryAgencies=new ArrayList<>();
            for(Object o:results){
                Object [] row=(Object[]) o;
                WeeklySummaryAgency weeklySummaryAgency=new WeeklySummaryAgency();
                weeklySummaryAgency.setAgency((String) row[0]);
                weeklySummaryAgency.setZeroUpdateFraction((BigDecimal) row[1]);
                System.out.println(weeklySummaryAgency);
                weeklySummaryAgencies.add(weeklySummaryAgency);

            }
            return  Optional.of(weeklySummaryAgencies);
        }catch (Exception e){
            e.printStackTrace();
            return  Optional.empty();
        }
    }



    public Optional<List<WeeklySummaryAgency>> getMiWeeklySummmaryAgency(){

        String queryStr= """
                select   agency, COUNT(CASE WHEN number_of_updates=0 THEN 1 END)*1.0/COUNT(*) AS fraction_no_updates
                from mi_schedule_updates where
                begin_time >= CURRENT_TIMESTAMP - interval '7 days'
                	AND begin_time <= CURRENT_TIMESTAMP
                                
                group by agency
                order by fraction_no_updates ;
                """;

        try{

            Query query=entityManager.createNativeQuery(queryStr);
            List<Object> results=query.getResultList();
            List<WeeklySummaryAgency> weeklySummaryAgencies=new ArrayList<>();
            for(Object o:results){
                Object [] row=(Object[]) o;
                WeeklySummaryAgency weeklySummaryAgency=new WeeklySummaryAgency();
                weeklySummaryAgency.setAgency((String) row[0]);
                weeklySummaryAgency.setZeroUpdateFraction((BigDecimal) row[1]);
                System.out.println(weeklySummaryAgency);
                weeklySummaryAgencies.add(weeklySummaryAgency);

            }
            return  Optional.of(weeklySummaryAgencies);
        }catch (Exception e){
            e.printStackTrace();
            return  Optional.empty();
        }
    }





}
