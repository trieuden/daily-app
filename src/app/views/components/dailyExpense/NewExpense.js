import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import FormatNumber from '../../../model/ForrmatNumber';

const items = 
    [
        { label: 'Xe', value: 3000 },
        { label: 'Nước', value: 10000 },
        { label: 'Ăn Trưa', value: 30000 },
    ]

const NewExpense = ({isModalVisible, modalStatus, addExpense, dataSize }) => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [note, setNote] = useState('')
    const [important, setImportant] = useState(false);
    const [noteStatus, setNoteStatus] = useState(false);

    const changeSelect = (value, index) => {
        if(index!=0){
            setTitle(items[index-1].label);
            setValue(parseInt(value, 10));
        }
    };
    const changeTitle = (value) => {
        setTitle(value);
    };
    const changeValue = (value) => {
        const numericValue = parseInt(value, 10);
        if (!isNaN(numericValue)) 
            setValue(numericValue);
        else
            setValue(value)
    };
    
    const changeNote = (value) => {
        setNote(value)
    }
    const changImportant = () => {
        setImportant(!important);
    }

    const actionSave = () => {
        const data = 
        {
            stt: dataSize,
            name: title ,
            value: value
        }
        addExpense(data);
        modalStatus();
    }

    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal isVisible={isModalVisible} onBackdropPress={modalStatus}>
            <View style={styles._model_view} onPress={Keyboard.dismiss}>

                <View style={styles._view_view}>
                    <FontAwesome5 name='edit' size={19} color={'#003333'} style={{marginRight: 15}} onPress={() => {setNoteStatus(!noteStatus)}}/>
                    <RNPickerSelect onValueChange={(value, index) => changeSelect(value, index)} items={items} darkTheme>
                        <FontAwesome5 name='bars' color={'#003333'} size={19}/>
                    </RNPickerSelect>
                    <FontAwesome name='star' size={19} color={important ? 'blue':'gray'} style={{marginLeft: 15}} onPress={() =>changImportant()}/>
                </View>

                <TextInput style={styles._inputTitle} value={title} onChangeText={changeTitle} placeholder='Mục chi' placeholderTextColor='gray' />
                
                <TextInput style={styles._inputValue} value={value.toString()} onChangeText={changeValue} keyboardType="numeric" placeholder='Giá trị' placeholderTextColor='gray'/>
                
                {(noteStatus && <TextInput style={styles._inputNote} multiline value={note} onChangeText={changeNote} placeholder='Ghi chú' placeholderTextColor='gray'/>)}
                
                <TouchableOpacity onPress={actionSave} style={styles._touch}>
                    <Text style={{fontSize: 18 }}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    </TouchableWithoutFeedback>
    )
}
    
export default NewExpense

const styles = StyleSheet.create({
    _model_view: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    _view_view: {
        flexDirection: 'row', 
        justifyContent:'flex-end', 
        alignItems:'flex-end', 
        width:'100%'
    },
    _inputTitle: {
        height: 35, 
        width: '90%', 
        fontSize: 20
    },
    _inputValue: {
        height: 35, 
        width: '90%', 
        marginVertical: 8, 
        fontSize: 17
    },
    _inputNote: {
        height: 100, 
        width: '90%', 
        padding: 5, 
        fontSize: 16, 
        fontStyle:'italic', 
        color:'#2929a3', 
        borderWidth: 0.2, 
        borderRadius: 2
    },
    _touch: {
        width:'50%', 
        borderWidth:0.2, 
        padding: 5, 
        marginTop: 10, 
        alignItems:'center', 
        borderRadius: 20, 
        backgroundColor:'#33ffff'
    },

})