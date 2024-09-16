import os
from sollfahrplanreader.currentdayanalyser import GTFSCurrentDayAnalysis
import unittest
myAnalyser=GTFSCurrentDayAnalysis(os.getcwd())
from datetime import datetime
from getrootdirectory import getRootDirectory

getRootDirectory()