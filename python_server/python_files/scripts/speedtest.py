from time import sleep
from datetime import datetime,time
from gtfscomparator.gtfscomparator import MentzRealtimeVersusScheduleComparator
import os
from getrootdirectory import getRootDirectory
start_time = datetime.now()


rootPath=getRootDirectory()
myUpdater=MentzRealtimeVersusScheduleComparator(rootPath)
newflatdf=myUpdater.updateFlatDataset()
newflatdf.to_pickle(os.path.join(getRootDirectory(),"data","flat"+datetime.now().strftime("%Y-%m-%d")+".pkl"))

end_time = datetime.now()

# Calculate the execution time
execution_time = end_time - start_time
print("Execution time:", execution_time, "seconds")