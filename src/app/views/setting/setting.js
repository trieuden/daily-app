import React from "react";
import { View, StyleSheet, Text, SectionList } from "react-native";
import { FontAwesome6, AntDesign, MaterialIcons, Entypo, SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Settings } from "react-native-feather";
import pageNavigation from "../../../utils/pageNavigation";


import { styles } from "../../css/setting/settingStyle";

const Setting = ({setKey}) => {

    const actionLogout = async () => {
        try {
            await AsyncStorage.setItem('currentAccount', '0');
            setKey(false)
        } catch (e) {

        }
    }
    return (
        <SectionList
            sections={[{ title: 'Main', data: [{}] }]}
            keyExtractor={(item, index) => index.toString()}
            style={styles.container} 
            renderItem={() => (
                <View>
                    <Text style={styles.title} >Setting</Text>
                    <View style={styles.setting} >
                        <FontAwesome6 name="circle-user" size={28} color="black" style={styles.icon} />
                        <View style={styles.section} >
                            <Text style={styles.set_title} >Account</Text>
                            <Text style={styles.set_content} >Thông tin, tài khoản, bảo mật ...</Text>
                        </View>
                        <AntDesign name="right" size={22} color="black" />
                    </View>

                    <View style={styles.setting} >
                        <MaterialIcons name="manage-history" size={28} color="black" style={styles.icon} />
                        <View style={styles.section} >
                            <Text style={styles.set_title} >Recent activity</Text>
                            <Text style={styles.set_content} >Interaction, Comment, Video,...</Text>
                        </View>
                        <AntDesign name="right" size={22} color="black" />
                    </View>

                    <View style={styles.setting} >
                        <Entypo name="info" size={28} color="black" style={styles.icon} />
                        <View style={styles.section} >
                            <Text style={styles.set_title} >Information</Text>
                            <Text style={styles.set_content} ></Text>
                        </View>
                        <AntDesign name="right" size={22} color="black" />
                    </View>

                    <View style={styles.setting} >
                        <SimpleLineIcons name="phone" size={28} color="black" style={styles.icon} />
                        <View style={styles.section} >
                            <Text style={styles.set_title} >Contact</Text>
                            <Text style={styles.set_content} ></Text>
                        </View>
                        <AntDesign name="right" size={22} color="black" />
                    </View>
                    <View>
                        <Text style={[styles.btn_logout, { color: 'blue' }]} >Account Changes</Text>
                        <Text style={[styles.btn_logout, { color: 'red' }]} onPress={() => actionLogout()} >Logout</Text>
                    </View>
                </View>
            )}
        />
    )
}

export default Setting;