import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'

export default class LineChartExample extends React.PureComponent {
    render() {
        const { navigation } = this.props;
        const dataSaKategorijama = navigation.getParam('historija', '');
        const data = [];
        for(i = 0; i < dataSaKategorijama.length; i++) 
            data[i] = dataSaKategorijama[i].value;
        return (
            <LineChart
                style={{ height: 200 }}
                data={ data }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
        )
    }

}