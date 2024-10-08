import urllib.request
import os
import zipfile
from configuration.parameters import ConfigurationParameters
from getrootdirectory import getRootDirectory
def renewData():
    configuration=ConfigurationParameters()
    url=configuration.gtfsurl
    print(url)
    
    output_path = os.path.join(getRootDirectory(),"data","gtfs"+".zip")
    print(output_path)
    output_dir = os.path.join(getRootDirectory(), "data")
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    
    # Download the file from `url` and save it locally under `output_path`:
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