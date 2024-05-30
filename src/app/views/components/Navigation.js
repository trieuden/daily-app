import React, { useState, useRef } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, ImageBackground, StyleSheet, Button, PanResponder, Dimensions } from 'react-native';
import { Foundation, AntDesign, Ionicons, Feather, } from '@expo/vector-icons';
import { styles } from '../../css/navigationStyle';
import { useNavigation } from "@react-navigation/native";

const Navigation = () => {
    const navigation = useNavigation();    
    const navigateToBudget = () => {
        navigation.navigate('Budget');
    };
    const navigateToProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonForm} >
                <AntDesign name="clockcircleo" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonForm} onPress={navigateToBudget}  >
                <Foundation name="clipboard-notes" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonForm}  onPress={navigateToProfile}   >
                <Feather name="user" size={38} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonForm} >
                <Ionicons name="notifications-outline" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonForm} >
                <AntDesign name="setting" size={26} color="black"/>
            </TouchableOpacity>
        </View>
    )
}
export default Navigation;