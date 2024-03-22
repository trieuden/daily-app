import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";


const Profile = ({navigation}) => {

    return (
      <View style={styles.main}>
        <Header/>
        <Navigation navigation={navigation} />
      </View>
    );
  };

const Header = () => {
    const navigation = useNavigation();    
    const navigateEditProfile = () => {
        navigation.navigate('EditProfile');
    }
    return(
        <View style={{overflow: "hidden", borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            <ImageBackground style={styles.header}>

                <Text style={{fontSize: 20, fontFamily: "Courier New", fontWeight:"bold", padding: 3, alignSelf:"center"}}>Nguyễn Thị Như Mai</Text>

                <View style={styles.header_view}>

                    <TouchableOpacity style={styles.header_touch}>
                        <AntDesign name="setting" size={25} style={{margin:5}} />
                    </TouchableOpacity>

                    <View>
                        <Image style={styles.header_avatar} source={require("../../../../assets/icons/avatar.jpg")}/>
                        <TouchableOpacity style={styles.header_avatar_touch}>
                            <AntDesign name="pluscircle" size={15} color={"red"} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.header_touch} onPress={navigateEditProfile}>
                        <AntDesign name="edit" size={25} style={{margin:5}} />
                    </TouchableOpacity>

                </View>

                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize: 17, fontFamily: "Courier New", fontWeight:"bold"}}>@trieudenn</Text>
                    <View style={{flexDirection:"row", paddingTop: 5, justifyContent:"center", alignItems: "center"}}>
                        <AntDesign name="notification" size={25} style={{margin:5}} />
                        <Text style={{color:"red", fontStyle:"italic"}} > Bạn đã ghi chú ngày hôm nay chưa ? </Text>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

const NavigationButton = ({icon, text, color, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{alignItems:"center", backgroundColor:"#e6ffff", height: 80, width: 100, borderRadius: 10, justifyContent:"center"}}>
            <FontAwesome5 name={icon} size={27} style={{margin:5}} color={color}/>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const data = [
    {
        nameIcon: "address-book",
        text: "Thông tin",
        color: "blue"
    },
    {
        nameIcon: "notes-medical",
        text: "Thêm ghi chú",
        color: "green"
    },
    {
        nameIcon: "hand-holding-usd",
        text: "Chi tiêu",
        color: "#a300cc",
    },
    {
        nameIcon: "chart-bar",
        text: "Thống kê",
        color: "purple"
    },
    {
        nameIcon: "calendar-alt",
        text: "Lịch",
        color: "#cccc00"
    },
    {
        nameIcon: "ellipsis-h",
        text: "Thêm",
        color: "black"
    },
]

const Navigation = ({navigation}) => {

    const navigateToSpend = () => {
        navigation.navigate('DailyExpense');
    };

    return(
        <View style={{backgroundColor:"#e6e6e6", height: 200, margin: 10, marginBottom: 0, justifyContent:"space-around", borderRadius: 20}}>
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                <NavigationButton icon={data[0].nameIcon} text={data[0].text} color={data[0].color}/>
                <NavigationButton icon={data[1].nameIcon} text={data[1].text} color={data[1].color}/>
                <NavigationButton icon={data[2].nameIcon} text={data[2].text} color={data[2].color} onPress={navigateToSpend} />
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                <NavigationButton icon={data[3].nameIcon} text={data[3].text} color={data[3].color}/>
                <NavigationButton icon={data[4].nameIcon} text={data[4].text} color={data[4].color}/>
                <NavigationButton icon={data[5].nameIcon} text={data[5].text} color={data[5].color}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    header:{
        width:"100%", 
        height: 250, 
        borderBottomStartRadius: 20,
    },
    header_view:{
        flexDirection:'row', 
        justifyContent:"space-around", 
        alignItems:"center",
    },
    header_touch:{
        backgroundColor: "#e6ffff", 
        borderRadius: 50
    },
    header_avatar: {
        height: 100, 
        width: 100, 
        borderRadius: 50
    },
    header_avatar_touch: {
        left: "85%", 
        bottom: 15
    },

})
export default Profile