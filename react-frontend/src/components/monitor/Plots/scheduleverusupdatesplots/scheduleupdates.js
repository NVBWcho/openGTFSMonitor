import { SpinnerLoading } from "../../../utils/SpinnerLoading";

import Plot from 'react-plotly.js';

function median(arr) {
    const mid = Math.floor(arr.length / 2);
    const copy = JSON.parse(JSON.stringify(arr));
    const sortedArr = copy.sort((a, b) => a - b);
  
    if (arr.length % 2 === 0) {
       return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
       return sortedArr[mid];
    }
 }
 


export const ScheuleVersusUpdatePlot=(props)=>{
    //throw new Error("Runtime Error uncaught");

    const medianValue=median(props.updates)
    console.log(medianValue)

    console.log(props)
    
    return (

        <>
        

        {(props.tickvals && props.xticks && props.ticktexts) ?
            (
                        <Plot
                            data={[
                                

                                /* {
                                    x: props.xticks,
                                    y: props.y2,
                                    opacity:0.5,
                                    mode: "lines+markers",
                                    type: "scatter",
                                    name: "Trips without Updates",
                                    marker: {
                                        "size": 3,
                                        "color": "red",
                                        
                                    }
                                }, */
                                
    
                                {
                                    x: props.xticks,
                                    y: props.updates,
                                    opacity: 0.4,
                                    mode: "lines+markers",
                                    type: "scatter",
                                    name: "Anteil mit Echtzeit Meldung",
                                    marker: {
                                        "size": 5,
                                        "color": "red",
                                        
                                    }
                                    
    
                                },

                                {
                                    x: props.xticks,
                                    y: props.y1,
                                    mode: "lines+markers",
                                    type: "scatter",
                                    name: "Soll Fahrten (Fahrtbeginn Zeit)",
                                    yaxis: 'y2',
                                    marker: {
                                        "size": 5,
                                        "color": "black",
                                        "opacity":0.8
                                    }
                                },


                                {
                                    x: [props.xticks[0], props.xticks[props.xticks.length-1]],
                                    y: [medianValue, medianValue],
                                    mode: 'lines',
                                    name: 'Median Wert (Anteil mit Echtzeitmeldung)',
                                    line: {
                                      color: 'rgb(50, 171, 96)',
                                      width: 3,
                                      dash: 'dashdot'
                                    },
                                    showlegend: true
                                  }
                            ]}
                            layout={{
                                title: "Fahrten und Anteil mit Echtzeit-Meldung ",
                                xaxis: {
                                    title: "Zeitpunkt",
    
                                    //type: 'category', // Treat x-values as categories
                                    //tickformat: '%m-%d %H:%M', // Disable automatic formatting
                                    tickmode: 'array',
                                    tick0: 0,
                                    dtick: 2,
                                    tickangle: -45,
                                    tickvals: props.tickvals.filter((_, index) => index % 2 === 0), // Filter every other tick value
                                    ticktext: props.ticktexts.filter((_, index) => index % 2 === 0)
    
                                },
                                margin: {
                                    b: 120
    
                                },
                                yaxis: {
                                    title: "Prozent",
                                },
                                yaxis2: {
                                    title: 'Gesamtzahl von Fahrten',
                                    overlaying: 'y',
                                    side: 'right',
                                },
                                width: 1000,
                                height: 600,
                                plot_bgcolor: '#F0F0F0',
                                paper_bgcolor: "#F0F0F0",
                                font: { "color": "#36454F" }
                                
                            }}
                        />
    
    
                    
            ) :
            (
                <SpinnerLoading></SpinnerLoading>
            )
    
        }
    
    </>

    );
    

}