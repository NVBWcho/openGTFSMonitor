from sollfahrplanreader.currentdayanalyser import GTFSCurrentDayAnalysis
import os
from getrootdirectory import getRootDirectory
myAnalyser=GTFSCurrentDayAnalysis(getRootDirectory())
todaysTrips=myAnalyser.writeToDatabase() 