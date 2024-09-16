import os
class ConfigurationParameters:
    def __init__(self) -> None:
        self.databasename="enturanalysis" #do not need it a containerized application with a single database called db
        self.recieverName="kangkan.dc1@gmail.com"
        self.realtimeUrl=os.getenv('REALTIME_URL')
        self.gtfsurl=os.getenv('GTFS_URL')
        self.adddedTripsString=os.getenv('ADDED_TRIPS','False')
        
        self.adddedTrips=self.adddedTripsString.lower() in ("yes", "true","True", "t", "1") #some feeds do not have schedule relationship field