# openGTFSMonitor

## Scope
The openGTFS consists of two parts. The first part, referred to as python_server in the docker-compose file, will collect data regarding the GTFS Real time updates. The second called spring_api spins up a simple REST API to serve this data.

### Parts

1. Python server: The python_server component will create a table with the trips for the current service day. Then it will listen to the GTFS realtime feed for updates for those trips. It will update the rows for the trips after every iteration of listening action (set to repeat every 2 minutes,can be changed in the source code).

2. Spring_API: This Rest API provides two simple end points ->/gtfsAnalyse/hourlyUpdates: This provides the fraction of trips that were operating during that hour, which have recieved at least one update in the GTFS-RT feed.  The second endpoint is /gtfsAnalyse/agencyWeekly- It gives the fraction of trips in the week , which are operated by a given agency, which have recieved at least one GTFS update during its service-day.

### Installation
Spinning up an application is simple- clone the repository, cd into it. Then you run it using:
```docker
   docker-compose up --build

### Important configurable parameters

 1. GTFS_URL -> The link from which one can download the GTFS Feed
 2. REALTIME_URL ->Link for the GTFS-RT feed
 3. ADDED_TRIPS-> Some data providers ADDED flag in TripDescriptor to specify that its a added trip. The value is false by default
 4. ports (spring_api)-> My default, the spring_api is mapped to the port 3001 of the host system. 
