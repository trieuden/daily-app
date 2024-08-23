import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { BarChart, ProgressChart, LineChart } from 'react-native-chart-kit';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../../../css/account/statisticsStyle';


const screenWidth = Dimensions.get('window').width;

const Statistics = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentBudget, setCurrentBudget] = useState('Spend');

    const IncomeMonth = useMemo(() => {
        const data = {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [20, 45, 28, 80, 99, 43],
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                }
            ],
        };
        const chartConfig = {
            backgroundGradientFrom: 'white',
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: 'white',
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(0, 102, 68, ${opacity})`,
            strokeWidth: 2, // Optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
        };

        return (
            <View style={styles.budget_month}>
                <View>
                    <Text style={styles.chart_title}>Budget</Text>
                </View>
                <View>
                    <LineChart
                        data={data}
                        width={screenWidth - 35}
                        height={256}
                        chartConfig={chartConfig}
                        bezier
                    />
                </View>
                <View style={styles.budget_select}>
                    <TouchableOpacity style={[styles.budget_touch, currentBudget == 'Spend' ? { borderWidth: 1 } : { borderWidth: 0 }]}>
                        <Text style={styles.budget_touch_text}>Spend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.budget_touch, currentBudget == 'Income' ? { borderWidth: 1 } : { borderWidth: 0 }]}>
                        <Text style={styles.budget_touch_text}>Income</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }, [currentDate])

    const SpendDate = useMemo(() => {

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    data: [20, 45, 28, 80, 20, 43],
                },
            ],
        };

        const chartConfig = {
            backgroundGradientFrom: 'white',
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: 'white',
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `#006644`,
            strokeWidth: 0.5,
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
            propsForBackgroundLines: {
                strokeDasharray: [1, 5], // kiểu đường gạch nối
                stroke: 'rgba(0,0,0,0.3)' // độ mờ của đường gạch nối
            }
        };
        return (
            <View style={styles.spend_chart}>
                <View>
                    <Text style={styles.chart_title}>Spend</Text>
                </View>
                <BarChart
                    style={styles.chart}
                    data={data}
                    width={screenWidth}
                    height={220}
                    yAxisLabel="$"
                    chartConfig={chartConfig}
                />
                <View style={styles.spend_select_date}>
                    <AntDesign name="left" size={24} color="black" />
                    <RNDateTimePicker value={currentDate} onChange={(event, date) => setCurrentDate(date)} />
                    <AntDesign name="right" size={24} color="black" />
                </View>
            </View>
        )
    })

    return (
        <View style={styles.container}>
            {IncomeMonth}
            {SpendDate}
        </View>
    )
}

export default Statistics;

