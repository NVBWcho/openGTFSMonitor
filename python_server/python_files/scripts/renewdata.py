import urllib.request
import os
import zipfile
from configuration.parameters import ConfigurationParameters
from getrootdirectory import getRootDirectory
def renewData():
    configuration=ConfigurationParameters()
    url=configuration.gtfsurl
    output_path = os.path.join(getRootDirectory(),"data","gtfs"+".zip")

    # Download the file from `url` and save it locally under `output_path`:
    print(url)
    print(output_path)
    urllib.request.urlretrieve(url, output_path)

    zip_file_path = os.path.join(getRootDirectory(),"data","gtfs"+".zip")
    extract_path = os.path.join(getRootDirectory(),"data")

    # Unzip the file
    with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
        zip_ref.extract('trips.txt',extract_path)
        zip_ref.extract('routes.txt',extract_path)
        zip_ref.extract('stop_times.txt',extract_path)
        zip_ref.extract('calendar.txt',extract_path)
        zip_ref.extract('calendar_dates.txt',extract_path)
    
    os.remove(zip_file_path)  