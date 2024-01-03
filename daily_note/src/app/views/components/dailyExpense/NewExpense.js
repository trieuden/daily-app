import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import DailyExpense from '../DailyExpense';

const NewExpense = ({isModalVisible, toggleModal, addExpense }) => {
    const [titleText, setTitleText] = useState('');
    const [valueText, setValueText] = useState('');
    const [noteText, setNoteText] = useState('')
    const [important, setImportant] = useState(false);
    const [noteStatus, setNoteStatus] = useState(false);

    const changeTitle = (value, index) => {
        if(index!=0){
            setTitleText(value);
        }
    };
    const changeValue = (value) => {
        setValueText(value);
    };
    const changeNote = (value) => {
        setNoteText(value)
    }

    const changImportant = () => {
        setImportant(!important);
    }

    const actionSave = () => {
        const data = 
        {
            stt: 0,
            name: 'ăn trưa',
            value: '200'
        }
        addExpense(data);
        toggleModal();
    }

    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
            <View style={styles.newExpense_model_view} onPress={Keyboard.dismiss}>
                <View style={{flexDirection: 'row', justifyContent:'flex-end', alignItems:'flex-end', width:'100%'}}>
                    <FontAwesome5 name='edit' size={19} color={'#003333'} style={{marginRight: 15}} onPress={() => {setNoteStatus(!noteStatus)}}/>
                    <RNPickerSelect onValueChange={(value, index) => changeTitle(value, index)} items={items} darkTheme>
                        <FontAwesome5 name='bars' color={'#003333'} size={19}/>
                    </RNPickerSelect>
                    <FontAwesome name='star' size={19} color={important ? 'blue':'gray'} style={{marginLeft: 15}} onPress={() =>changImportant()}/>
                </View>

                <TextInput style={{height: 35, width: '90%', fontSize: 20}} value={titleText} onChangeText={changeTitle} placeholder='Mục chi' placeholderTextColor='gray' />
                <TextInput style={{height: 35, width: '90%', marginVertical: 8, fontSize: 17}} value={valueText} onChangeText={changeValue} placeholder='Giá trị' placeholderTextColor='gray'/>
                {(noteStatus && <TextInput style={{height: 100, width: '90%', padding: 5, fontSize: 16, fontStyle:'italic', color:'#2929a3', borderWidth: 0.2, borderRadius: 2}} multiline value={noteText} onChangeText={changeNote} placeholder='Ghi chú' placeholderTextColor='gray'/>)}
                <TouchableOpacity onPress={actionSave} style={{width:'50%', borderWidth:0.2, padding: 5, marginTop: 10, alignItems:'center', borderRadius: 20, backgroundColor:'#33ffff'}}>
                    <Text style={{fontSize: 18 }}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    </TouchableWithoutFeedback>
    )
}

const items = 
    [
        { label: 'Football', value: 'Football' },
        { label: 'Baseball', value: 'Baseball' },
        { label: 'Hockey', value: 'Hockey' },
    ]
    
export default NewExpense

const styles = StyleSheet.create({
    newExpense_model_view: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    newExpense_input_value:{
        marginTop: 8, 
        padding: 6, 
        borderRadius: 5, 
        fontSize: 17, 
        alignSelf:'flex-end', 
        textAlign:'right',
        color:'blue',
        margin: 5,
    }
})