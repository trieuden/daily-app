import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Navigation = () => {
    const navigation = useNavigation();    
    const navigateToProfile = () => {
        navigation.navigate('Profile');
    };

    return(
        <View style={styles.main}>
            <Icon icon={require('../../../../assets/icons/note.png')} height={22}/>
            <Icon icon={require('../../../../assets/icons/search.png')} height={22} />
            <Icon icon={require('../../../../assets/icons/profile.png')} height={35} onPress={navigateToProfile} />
            <Icon icon={require('../../../../assets/icons/notification.png')} height={22}/>
            <Icon icon={require('../../../../assets/icons/setting.png')} height={22} />
        </View>
    )
}


const Icon = ({  icon, height, backgroundColor, onPress }) => {
    return (
        <TouchableOpacity style={{ backgroundColor: backgroundColor, padding: 7, borderRadius: 50 }} onPress={onPress}>
            <Image style={{ height: height, width: height }} source={icon} />
        </TouchableOpacity>
    );
  };
  

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: 65,
        backgroundColor: "#FFFFFF",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        borderTopWidth:1,
        paddingBottom: 5
    },
});
export default Navigation