import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FormatNumber from "../../../model/ForrmatNumber";

import Draggable from 'react-native-draggable';
import NewExpense from "./NewExpense";

const Data = [
    {
        date: new Date("2024-01-13"),
        value: [
            {
                stt: 0,
                name: "Ăn sáng",
                value: 10000,
            }
        ]
    },
    {
        date: new Date("2024-1-12"),
        value: [
            {
                stt: 0,
                name: "Ăn sáng",
                value: 30000,
            }
        ]
    }
];

const DailyExpense = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [date, setDate] =  useState(new Date());
    const [total, setTotal] =  useState(0);
    const [dataOfDate, setDataOfDate] =  useState([]);


    const modalStatus = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        let temp = 0
        for(let i = 0; i < Data.length; i++){
            if(date.toISOString().split('T')[0] == Data[i].date.toISOString().split('T')[0]){
                setDataOfDate(Data[i].value)
            }
        }
        for( let i = 0; i < dataOfDate.length ; i++) {
            temp += dataOfDate[i].value;
        }
        setTotal(temp);
      },[date, dataOfDate, dataOfDate.length]);

    const handleDateChange = (event, selectedDate) => {
        setDate(selectedDate);
    }

    const addExpense = (data) => {
        dataOfDate.push(data)
    }

    return (
        <View style={styles.main}>
            <View style={styles._view}>
                <Text style={styles._view_text} >Chi tiêu hôm nay</Text>
                <RNDateTimePicker value={date} onChange={handleDateChange}/>
            </View>
            <FlatList
                style={{ flex: 1, paddingTop: 20 }}
                data={dataOfDate}
                renderItem={({ item }) => (
                    <Item stt={item.stt} name={item.name} value={item.value} />
                )}
                keyExtractor={(item) => item.stt.toString()}
            />

            <ExpenseTotal total={total}/>
            <Draggable x={220} y={450} isCircle >
                <FontAwesome5 name="plus-circle" size={45} color={"#00cccc"} onPress={modalStatus}/>
            </Draggable>
            <NewExpense isModalVisible={isModalVisible} modalStatus={modalStatus} addExpense={addExpense} dataSize={dataOfDate.length}/>
        </View>
    );
}

const Item = ({stt, name, value}) => {
    return(
        <View style={styles.item}>
            <View style={styles.item_view} >
                <Text style={styles.item_text} >{stt}</Text>
            </View>
            <View style={styles.item_view} >
                <Text style={styles.item_text}>{name}</Text>
            </View>
            <View style={{alignItems:'flex-end', ...styles.item_view}} >
                <Text style={styles.item_text}>{FormatNumber({number: value})}</Text>
            </View>
        </View>
    )
}
const ExpenseTotal = ({total}) => {
    return(
        <View style={styles.expenseTotal}>
            <Text style={styles.expenseTotal_text}>Tổng chi tiêu:</Text>
            <Text style={styles.expenseTotal_text}>{FormatNumber({number: total})}</Text>
        </View>
    )
}


export default DailyExpense

const styles = StyleSheet.create({
    main: {
        backgroundColor:"white", 
        flex: 1,
        paddingTop: 5
    },
    _view: {
        paddingHorizontal: 15, 
        alignItems:"center", 
        flexDirection:"row"
    },
    _view_text: {
        fontSize: 22, 
        flex: 1, 
        color: '#0047b3', 
        fontWeight:'bold'
    },
    item: {
        height:70, 
        marginHorizontal: 10, 
        marginVertical: 5, 
        flexDirection:"row", 
        backgroundColor:"#99ffff", 
        alignItems:"center", 
        borderRadius: 15, 
        paddingHorizontal: 15
    },
    item_view: {
        flex: 1
    },
    item_text: {
        color:"black",
        fontSize: 18,
    },
    expenseTotal: {
        flexDirection: "row", 
        justifyContent:"space-around", 
        paddingBottom: 5
    },
    expenseTotal_text: {
        fontSize: 22,
        fontFamily: "Courier New",
        fontWeight:'bold',
        color: '#b30000'
    },
    
})