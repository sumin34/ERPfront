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
    <div style={{height}}>
    <ResponsivePie
        data={data}
        margin={{ top: 3, right: 10, bottom: 20, left: 5 }}
        sortByValue={true}
        fit={true}
        innerRadius={0.65}

        

        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'purple_blue' }}
        borderWidth={1}
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
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 50,
                translateY: 10,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
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