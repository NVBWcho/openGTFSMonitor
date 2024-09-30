
import { useState, useEffect } from "react"
import { gtfsService } from "../../../../SecurityContext";
import axios from "axios";

import { SpinnerLoading } from "../../../utils/SpinnerLoading";
import { AgencyWisePlot } from "./agencywise";

import { ErrorBoundary } from "react-error-boundary";

import { getAgencyData } from "../../../../services/micromonitorcalls";

import { ErrorFallback } from "./errorboundary";
export const AgencyWiseMonitor = () => {

    const [agencyData, setAgencyData] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const formatData = (nvbwData) => {
            var agencies = []

            var agencyScores = []
            for (let i = 0; i < nvbwData.length; i++) {

                agencies.push(nvbwData[i].agency)
                agencyScores.push((1-nvbwData[i].zeroUpdateFraction)*100)



            }

            return { "agencies": agencies, "scores": agencyScores }
        }

        const fetchAgencyData = async () => {
            

            const res_agencyise= await getAgencyData()

            console.log(res_agencyise)

           
            //(res_nvbw.data)
            //console.log(res_nvbw.data[0])
            const data = res_agencyise.data
            const agencies = []

            if (data.length > 0) {

                setAgencyData(formatData(data))


            }

            setIsLoading(false)



        }

        fetchAgencyData()
    }, [])

    useEffect(() => {

        console.log(agencyData)

    }, [agencyData])

    return (

        <div className="container">
            <ErrorBoundary

                FallbackComponent={(props) => <ErrorFallback {...props} componentName="AgencyWisePlot" />}
            >
                <div className="row mt-2 mb-2">
                    <div className="col">
                        {!isLoading ? (
                            <AgencyWisePlot
                                agencies={agencyData.agencies}
                                scores={agencyData.scores}
                            ></AgencyWisePlot>
                        )
                            : (<SpinnerLoading></SpinnerLoading>)}

                    </div>
                </div>


            </ErrorBoundary>

        </div>
    );


}