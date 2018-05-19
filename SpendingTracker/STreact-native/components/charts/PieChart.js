import React from 'react'
import { View } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

export default class PieChartWithCenteredLabels extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    key: 1,
                    amount: 50,
                    svg: {fill: '#600080'}
                }
            ]
        };
      }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    componentWillMount() {
        const { navigation } = this.props;
        const dataS = navigation.getParam('historija', '');
        console.log(dataS);
        let data = [{
            key: 1,
            amount: 2,
            svg: {fill: '#485278'}
        }];
        console.log(dataS);
        for(var i = 0; i < dataS.length; i++) {
          
        }
        this.setState({data});
    }
    render() {
        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {this.state.data.amount}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={this.state.data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
        )
    }

}
