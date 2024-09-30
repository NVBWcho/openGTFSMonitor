 import { useState,useEffect } from "react"

 import { isUserLoggedIn } from "../../services/AuthService"
 import { GtfsDashboard } from "../maps/Plots/gtfsdashboard";
 
 export const GtfsLandingPage=()=>{

    const isAuth = isUserLoggedIn();

    return(

        <>
        {isAuth ? (
            <GtfsDashboard></GtfsDashboard>
        ): (
            <div className="container" >
                <div className="row mt-4 mb-4">
                    <div className="col-md-4 offset-md-4">
                    <div className="alert alert-danger" role="alert">
                Sie sind sind nicht angemeldet. Bitte melden Sie sich ein.

                    </div>
            

            </div>
            </div>
            </div>
        )}
        </>
    );




 }