
import { useEffect, useState } from "react"
import { gtfsService } from "../../../../SecurityContext";
import axios from "axios";


import { findFirstMeasurementsIndexes } from "../utilityfunctions";
import { getNVBWHourlyScheduleUpdateData } from "../../../../services/ResistrictedCalls";
import { getMiHourlyScheduleUpdateData } from "../../../../services/ResistrictedCalls";
import { ScheuleVersusUpdatePlot } from "./scheduleupdates";

import { AgencyWisePlot } from "./agencywise";

import { AgencyWiseMonitor } from "./agencymonitor";
import { MiAgencyWiseMonitor } from "./miagencywise";


import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "./errorboundary";

import { SpinnerLoading } from "../../../utils/SpinnerLoading";





export const MiScheduleDataMonitor = () => {

    const [hourlyData, setHourlyData] = useState([])

    const [plotData, setPlotData] = useState({})

    const [isLoading, setIsLoading] = useState(true)




    useEffect(() => {

        const formatDate = (datestr) => {
            return datestr.substring(8, 10) + "-" + datestr.substring(5, 7) + " " + datestr.substring(11, 16)
        }

        const truncateDate = (datestr) => {
            return datestr.substring(0, 5)

        }

        const formatData = (nvbwData) => {
            var plot_xticks = []
            var plot_x1 = []
            var plot_x2 = []
            var plot_y1 = []
            var plot_y2 = []
            var plot_updates = []
            for (let i = 0; i < nvbwData.length; i++) {

                plot_xticks.push(formatDate(nvbwData[i].timestamp))
                plot_x1.push(nvbwData[i].timestamp)
                plot_x2.push(nvbwData[i].timestamp)
                plot_y1.push(nvbwData[i].numberOfTrips)
                plot_y2.push(nvbwData[i].noUpdates)
                plot_updates.push((1-nvbwData[i].zeroUpdateFraction)*100)

            }

            const dayBegindexes = findFirstMeasurementsIndexes(nvbwData)
            console.log(dayBegindexes)

            const tickvals = []
            dayBegindexes.map((indexval) => {
                tickvals.push(formatDate(nvbwData[indexval].timestamp))
            })

            const ticktexts = []

            tickvals.map((datestr) => {
                ticktexts.push(truncateDate(datestr))
            })



            console.log(tickvals)
            //console.log(ticktexts)
            //console.log(plot_xticks)
            return {
                "plot_x1": plot_x1, "plot_x2": plot_x2,
                "plot_y1": plot_y1, "plot_y2": plot_y2, "ticks": plot_xticks, "updates": plot_updates,
                "tickvals": tickvals, "ticktexts": ticktexts
            }


        }

        const fetchGtfsData = async () => {

            const res_nvbw = await getMiHourlyScheduleUpdateData()
            //(res_nvbw.data)
            console.log(res_nvbw.data[0])
            const data = res_nvbw.data
            console.log("hello")

            if (data.length > 0) {
                setPlotData(formatData(data))

            }

            setIsLoading(false)











        }

        fetchGtfsData()


    }, [])

    useEffect(() => {

        console.log(plotData)

    }, [plotData])

    return (
        <div className="container">
            <ErrorBoundary 
            FallbackComponent={(props) => <ErrorFallback {...props} componentName="ScheduleVersusUpdatePlot" />}
            
            >
                <div className="row mt-2 mb-2">

                    {!isLoading ? (<ScheuleVersusUpdatePlot
                        x2={plotData.plot_x2}
                        y1={plotData.plot_y1}
                        y2={plotData.plot_y2}
                        xticks={plotData.ticks}
                        tickvals={plotData.tickvals}
                        ticktexts={plotData.ticktexts}
                        updates={plotData.updates}/>)
                    : (<SpinnerLoading></SpinnerLoading>)}

                    
                    
                </div>
            </ErrorBoundary>


            <div className="row mt-2 mb-2">
                <MiAgencyWiseMonitor></MiAgencyWiseMonitor>
            </div>

        </div>


    );

}