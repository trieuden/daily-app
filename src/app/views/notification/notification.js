import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useNotifications from "../../../hook/useNotifications";

import TimestampConverter from "../../../utils/timestampConverter";
import Login from "../components/login";
import getCurrentAccount from "../../../utils/useCurrentAccount";

import { styles } from "../../css/notification/notificationStyle";


const Notification = () => {
    const [notificationList, setNotificationList] = useState(null);

    const { useNotificationList } = useNotifications();
    const currentAccount = getCurrentAccount();

    useEffect(() => {
        setNotificationList(useNotificationList);
    }, [useNotificationList])

    return (
        <SectionList
            sections={[{ title: 'Main', data: [{}] }]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={() => (
                <View style={styles.container} >
                    {
                        <>
                            <Text style={styles.title} >Notification</Text>
                            {
                                notificationList != null ? (
                                    notificationList.map((item) => (
                                        <View key={item.id} style={styles.notification} >
                                            <AntDesign name="setting" size={24} color="black" style={styles.avatar} />
                                            <View style={styles.section} >
                                                <Text style={styles.notif_title} >{item.title}</Text>
                                                <Text style={styles.notif_content} >{item.content}</Text>
                                                <Text style={styles.notif_date} >{TimestampConverter.convert(item.created_date).newDate}</Text>
                                            </View>
                                            <Entypo name="dots-three-vertical" size={17} color="black" />
                                        </View>
                                    ))
                                ) : (
                                    <Text>Loading...</Text>
                                )
                            }
                        </>
                    }

                </View>
            )}
        />
    )
}

export default Notification;
