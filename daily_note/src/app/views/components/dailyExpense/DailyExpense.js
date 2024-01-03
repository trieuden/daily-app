import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Draggable from 'react-native-draggable';
import NewExpense from "./NewExpense";

const Data = [
    {
        stt: 0,
        name: "Ăn sáng",
        value: "100.000.000",
    }
];

const DailyExpense = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [date, setDate] = new useState();

    const handleDateChange = (event, selectedDate) => {
          console.log("Selected Date:", selectedDate);
    }
    return (
        <View style={{backgroundColor:"white", flex: 1}}>
            <View style={{ paddingHorizontal: 15, alignItems:"center", flexDirection:"row"}}>
                <Text style={{fontSize: 20, flex: 1}} >Chi tiêu hôm nay</Text>
                <RNDateTimePicker value={new Date()} onChange={handleDateChange}/>
            </View>
            <View style={{flex: 1, paddingTop: 20}}>
                {Data.map((item) => (
                    <Item key={item.stt} stt={item.stt} name={item.name} value={item.value} />
                ))}
            </View>
            <ExpenseTotal/>
            <Draggable x={220} y={450} isCircle >
                <FontAwesome5 name="plus-circle" size={45} color={"#00cccc"} onPress={toggleModal}/>
            </Draggable>
            <NewExpense isModalVisible={isModalVisible} toggleModal={toggleModal} addExpense={addExpense}/>
        </View>
    );
}

const Item = ({stt, name, value}) => {
    return(
        <View style={{ height:50, margin: 10, flexDirection:"row", backgroundColor:"#1affff", alignItems:"center", justifyContent:"space-around", borderRadius: 15}}>
            <Text style={styles.item_text} >{stt}</Text>
            <Text style={styles.item_text}>{name}</Text>
            <Text style={styles.item_text}>{value}</Text>
        </View>
    )
}
const ExpenseTotal = () => {
    return(
        <View style={{flexDirection: "row", justifyContent:"space-around", paddingBottom: 5}}>
            <Text style={styles.expenseTotal_text}>Tổng chi tiêu:</Text>
            <Text style={styles.expenseTotal_text}>0</Text>
        </View>
    )
}

const addExpense = (data) => {
    Data.push(data)
}

export default DailyExpense

const styles = StyleSheet.create({
    item_text: {
        color:"black",
        fontSize: 18,
    },
    expenseTotal_text: {
        fontSize: 20,
        fontFamily: "Courier New",
        fontWeight:'bold'
    },

})