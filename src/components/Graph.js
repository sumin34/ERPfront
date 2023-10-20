import React from "react";
import { ResponsiveLine } from '@nivo/line'

function Graph(props){
const {data,height,legend}=props;
const MyResponsiveLine = () => (
    <div style={{height}}>
    <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 110, bottom: 100, left: 90 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 15,
            tickRotation: 0,
            legend,
            legendOffset: 52,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 0,
            tickPadding: 11,
            tickRotation: 1,
            legend: 'count',
            legendOffset: -55,
            legendPosition: 'middle'
        }}
        lineWidth={4}
        pointSize={8}
        enableGridX={false}
        pointColor="#ffffff" 
        colors={{ scheme: 'paired' }}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        areaBaselineValue={20}
        areaOpacity={0.1}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
)

return(
    <MyResponsiveLine></MyResponsiveLine>
);
}
export default Graph;