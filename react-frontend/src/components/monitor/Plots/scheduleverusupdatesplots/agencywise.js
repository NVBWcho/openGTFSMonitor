
import Plot from 'react-plotly.js';
export const AgencyWisePlot=(props)=>{

    //throw new Error("Uncaught error")

    return (

        <div>
            <Plot
            data = {[
                {
                  x: props.agencies,
                  y: props.scores,
                  type: 'bar'
                }
                
              ]}

              layout={{
                title: "Anteil mit Echtzeit Meldung pro Teilnetz (letzte 7 Tage)",
                xaxis: {
                    title: " Teilnetz" ,

                    

                },
                margin: {
                    b: 120

                },
                yaxis: {
                    title: "Prozent",
                },
                
                width: 1000,
                height: 600,
                plot_bgcolor: '#F0F0F0',
                paper_bgcolor: "#F0F0F0",
                font: { "color": "#36454F" }
            }}
            ></Plot>
        </div>
    );


}