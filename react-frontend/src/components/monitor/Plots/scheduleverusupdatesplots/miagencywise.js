
import { useState, useEffect } from "react"
import { gtfsService } from "../../../../SecurityContext";
import axios from "axios";
import { getAgencyWiseData } from "../../../../services/ResistrictedCalls";
import { SpinnerLoading } from "../../../utils/SpinnerLoading";
import { AgencyWisePlot } from "./agencywise";
import { getMiAgencyWiseData } from "../../../../services/ResistrictedCalls";

import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "./errorboundary";
export const MiAgencyWiseMonitor = () => {

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
            const res_nvbw = await getMiAgencyWiseData();
            //(res_nvbw.data)
            console.log(res_nvbw.data[0])
            const data = res_nvbw.data
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