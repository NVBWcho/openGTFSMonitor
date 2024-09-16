import os
from sollfahrplanreader.currentdayanalyser import GTFSCurrentDayAnalysis
import unittest
myAnalyser=GTFSCurrentDayAnalysis(os.getcwd())
from datetime import datetime



class SollFahrplanmethodTester(unittest.TestCase):
    
   
    
    def testDateFormtter(self):
        todaysDate='20240514'
        timeToday='22:30:00'
        returedDate=myAnalyser.generateTimeStamp(todaysDate,timeToday)
        print(returedDate)
        actualTimestamp=datetime.strptime("20240514 22:30:00","%Y%m%d %H:%M:%S")
        actualDay=actualTimestamp.day
        actualHour=actualTimestamp.hour
        actualMinute=actualTimestamp.minute
        
        self.assertEqual(actualDay,returedDate.day)
        self.assertEqual(actualHour,returedDate.hour)
        self.assertEqual(actualMinute,returedDate.minute)
    def testServiceParser(self):
        returnedServices=myAnalyser.getTodaysServices()
        numberOfUniqueDays=len(set(list(returnedServices["date"])))
        self.assertEqual(numberOfUniqueDays,1)
        returnedDay=list(returnedServices["date"])[0]
        self.assertEqual(returnedDay,datetime.strftime(datetime.today(),"%Y%m%d"))     
solllTester=SollFahrplanmethodTester()
solllTester.testDateFormtter()

solllTester.testServiceParser()
