# openGTFSMonitor

## Scope
The openGTFS consists of three parts. The first part, referred to as python_server in the docker-compose file, will collect data regarding the GTFS Real time updates. The second called spring_api spins up a simple REST API to serve this data. The third part is a simple react-based client to display and plot the statistics (Note that currently one leads to launch to react frontend separely (docker integration will follow))

### Parts

1. Python server: The python_server component will create a table with the trips for the current service day. Then it will listen to the GTFS realtime feed for updates for those trips. It will update the rows for the trips after every iteration of listening action (set to repeat every 2 minutes,can be changed in the source code).

2. Spring_API: This Rest API provides two simple end points ->/gtfsAnalyse/hourlyUpdates: This provides the fraction of trips that were operating during that hour, which have recieved at least one update in the GTFS-RT feed.  The second endpoint is /gtfsAnalyse/agencyweekly- It gives the fraction of trips in the week , which are operated by a given agency, which have recieved at least one GTFS update during its service-day.

3. React-frontend: A simple react based client to visualize the statistics. The react application will be lauched on port 4500 while the API will be launched on port 3001. If you are using this in a production environment, it may make sense to let a nginx container take care of the routing. Note that if you do change the port of the spring_container, you have to change the api url in the src code SecurityContext.js file of react-frontend directory.

### Installation
Spinning up an application is simple- clone the repository, cd into it. Then you run it using:

   docker-compose up --build

### Important configurable parameters

 1. GTFS_URL -> The link from which one can download the GTFS Feed
 2. REALTIME_URL ->Link for the GTFS-RT feed (note that you should delete the old volumes after changing the url. docker-compose down -v should do the work. One should rebuild after changing the url)
 3. ADDED_TRIPS-> Some data providers ADDED flag in TripDescriptor to specify that its a added trip. The value is false by default
 4. ports (spring_api)-> My default, the spring_api is mapped to the port 3001 of the host system. 

### renewal of data
The application needs to be stopped and restarted before midnight. I use cron with the stopcontainers.sh and starcontainers.sh to achieve this. I run stopcontainer.sh at 23:45 and startcontainers.sh at 00:05 as cron-job.