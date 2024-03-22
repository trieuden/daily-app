import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableNativeFeedback, Keyboard, TouchableOpacity } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const EditProfile = () => {
    return(
        <TouchableNativeFeedback onPress={Keyboard.dismiss} style={styles.main}>
            <View style={{backgroundColor:'white', flex: 1}}>
                <Avatar/>
                
                <Text style={{paddingVertical: 20, fontSize: 15, fontStyle: 'normal', paddingLeft: 10, color:'#00cccc'}}>Thông tin của bạn</Text>

                <View style={styles._view_view}>
                    <Text style={{fontSize: 18}}>Tên</Text>
                    <TextInput placeholder="Huỳnh Ngọc Triều" style={{fontSize: 18}}/>
                </View>

                <View style={styles._view_view}>
                    <Text style={{fontSize: 18}}>Email</Text>
                    <TextInput placeholder='yantic088@gmail.com' style={{fontSize: 18}}/>
                </View>

                <View style={styles._view_view}>
                    <Text style={{fontSize: 18}}>Số Điện Thoại</Text>
                    <TextInput placeholder='0941045139' style={{fontSize: 18}}/>
                </View>

                <View style={styles._view_view}>
                    <Text style={{fontSize: 18}}>Ngày Sinh</Text>
                    <RNDateTimePicker value={new Date('2003-01-31')}/>
                </View>

                <View style={styles._view_view}>
                    <Text style={{fontSize: 18}}>Địa Chỉ</Text>
                    <TextInput placeholder='Thêm địa chỉ' style={{fontSize: 18}}/>
                </View>
                <Buttons/>
            </View>

        </TouchableNativeFeedback>
    )
}

const Avatar = () => {
    return(
        <View style={styles.avatar_view}>
            <Image style={styles.avatar_image} source={require("../../../../../assets/icons/avatar.jpg")}/>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.avatar_touch}>
                    <Text style={{color:'#009999'}}>Thư Viện</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.avatar_touch}>
                    <Text style={{color:'#009999'}}>Máy Ảnh</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Buttons = () => {
    return(
        <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor:'#4dffff', height: 40, width: 90, justifyContent:'center', alignItems:'center', borderRadius: 20}}>
                <Text>Lưu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    main: {
        backgroundColor:'white',
    },
    _view_view: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        padding: 23,
        height: 80
    },
    avatar_view: {
        justifyContent:"space-around", 
        alignItems:"center",
        marginVertical: 20,
    },
    avatar_image: {
        height: 120, 
        width: 120, 
        borderRadius: 80
    },
    avatar_touch:{
        backgroundColor:'#ccffff',
        marginHorizontal: 15,
        height: 30,
        width: 90,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30
    },
})