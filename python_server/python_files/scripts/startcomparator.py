from time import sleep
from datetime import datetime,time
start_time = datetime.now()
import os
from gtfscomparator.gtfscomparator import RealtimeVersusScheduleComparator
import traceback
from getrootdirectory import getRootDirectory

from configuration.parameters import ConfigurationParameters


from sollfahrplanreader.currentdayanalyser import GTFSCurrentDayAnalysis
from getrootdirectory import getRootDirectory
from scripts.renewdata import renewData
from exceptions.databasealredyfilled import DatabaseAlreadyFilledException

print("starting application")
#Step 1 download and extract data
renewData()

#step 2 fill the database with schedule data

try:
    
    myAnalyser=GTFSCurrentDayAnalysis(getRootDirectory())
    todaysTrips=myAnalyser.writeToDatabase() 
except:
    traceback.print_exc()
  
    
   
#step 3 update the data between 00:15 and 23:45

from time import sleep
from datetime import datetime,time
#beginTime_time = time(00, 15)
endTime=time(23,30)


print(str(datetime.now().strftime("%Y-%m-%d %H:%M:%S")))    



while  (datetime.now().time()<endTime):
    try:
        
        print("Comparator started at"+ str(datetime.now().strftime("%Y-%m-%d %H:%M:%S")))
        
        myUpdater=RealtimeVersusScheduleComparator(getRootDirectory())
        newflatdf=myUpdater.updateFlatDataset()
        newflatdf.to_pickle(os.path.join(getRootDirectory(),"data","flat"+".pkl"))
        sleep(120)
    except:
        
        try:
            myNotifier=RealtimeVersusScheduleComparator(getRootDirectory())
            myNotifier.notifyViaEmail()
        except:
            print("Email could not be sent")    
        print("Exception occured at"+datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        traceback.print_exc()
        
        sleep(120)              