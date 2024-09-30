
import { applicationBackendService } from "../SecurityContext"
import axios from "axios";
export const getHourlyScheduleUpdateData=()=>{

    
  
    const config={
      method: 'get',
      maxBodyLength: Infinity,
      url: `${applicationBackendService}/hourlyUpdates`,
    
    }
  
  
    return axios.request(config)
  
  }


  export const getAgencyData=()=>{

  
  
    const config={
      method: 'get',
      maxBodyLength: Infinity,
      url: `${applicationBackendService}/agencyweekly`,
    
    }
  
   
    return axios.request(config)
  
  }