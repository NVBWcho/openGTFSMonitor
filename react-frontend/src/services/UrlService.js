

export function urlStem(protocol){


    const urlrepository={"http":'http://10.70.186.70',"https":'https://bfrk-kat-api.efa-bw.de'}

    if(protocol=="http"){
        return urlrepository.http
    }else{
        return urlrepository.https
    } 
}