import React from "react";
import { ResponsivePie } from '@nivo/pie'

function Circlegraph(props){
const {height}=props;
const data=[
    {
      "id": "css",
      "label": "css",
      "value": 60,
      "color": "hsl(269, 70%, 50%)"
    },
    {
      "id": "stylus",
      "label": "stylus",
      "value": 86,
      "color": "hsl(2, 70%, 50%)"
    },
    {
      "id": "rust",
      "label": "rust",
      "value": 131,
      "color": "hsl(120, 70%, 50%)"
    }
  ];
const MyResponsivePie = () => (
    <>
    <p>qwerqrwrqwrqwr</p>
    <div style={{height}}>
    <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        sortByValue={true}
        innerRadius={0.65}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'purple_blue' }}
        borderWidth={2}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.4'
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabel="id"
        arcLabelsRadiusOffset={0.65}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.8'
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 0,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 0,
                symbolSize: 20,
                itemDirection: 'left-to-right'
            }
        ]}
    />
    </div>
    </>
);

return(
    <MyResponsivePie></MyResponsivePie>
);
}
export default Circlegraph;