import React from 'react';
import { BarChart, Grid } from 'react-native-svg-charts';

export default class BarChartEx extends React.PureComponent {

    render() {

        const fill = 'rgb(134, 65, 244)'
        const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0]

        return (
            <BarChart
                style={{ 
                    height: 200
                }}
                data={ data }
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }}
            >
                <Grid/>
            </BarChart>

        )
    }

}