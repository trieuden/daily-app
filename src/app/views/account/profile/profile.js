import React, { useState, useMemo } from "react"
import { TouchableOpacity, View, Text, StyleSheet, SectionList, Image } from "react-native"
import { AntDesign } from "@expo/vector-icons"

import Statistics from "./statistics"

import useCurrentAccount from "../../../../utils/useCurrentAccount"

const Profile = ({ onCloseModal }) => {
    const currentAccount = useCurrentAccount();

    const [modalView, setModalView] = useState('Status');


    const renderContent = useMemo(() => {
        switch (modalView) {
            case 'Status':
                return;
            case 'Statistics':
                return <Statistics/>;
            case 'More':
                return;
            default:
                return null;
        }
    }, [modalView]);

    return (
        <SectionList
            sections={[{ title: 'Main', data: [{}] }]}
            keyExtractor={(item, index) => index.toString()}
            style={styles.main}
            renderItem={() => (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { onCloseModal(false) }} style={styles.btnBack}>
                        <AntDesign name="close" size={28} color="black" />
                    </TouchableOpacity>

                    <View style={styles.header}>
                        <Image source={{ uri: currentAccount.image }} style={styles.avatar} />
                        <View style={styles.infor}>
                            <View style={styles.nameForm}>
                                <Text style={styles.name_text}>{currentAccount.name}</Text>
                                <Text style={styles.id_text}>@trieudennn</Text>
                            </View>
                            <Text style={styles.describe}>yêu milo</Text>
                            <TouchableOpacity style={styles.btnEdit}>
                                <Text style={styles.editText}>Edit Information</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.navigation}>
                        <TouchableOpacity onPress={() => setModalView('Status')} style={[styles.navigation_touch, modalView == 'Status' ? { borderBottomWidth: 1.5 } : { borderBottomWidth: 0 }]}>
                            <Text style={[styles.navigation_text]}>Status</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalView('Statistics')} style={[styles.navigation_touch, modalView == 'Statistics' ? { borderBottomWidth: 1.5 } : { borderBottomWidth: 0 }]}>
                            <Text style={styles.navigation_text}>Statistics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalView('More')} style={[styles.navigation_touch, modalView == 'More' ? { borderBottomWidth: 1.5 } : { borderBottomWidth: 0 }]}>
                            <Text style={styles.navigation_text}>More</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {renderContent}
                    </View>
                </View>

            )}
        />
    )
}
export default Profile

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%'
    },
    container: {
        marginTop: 35,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 5,
        alignItems:'flex-end'
    },
    btnBack: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        marginRight: 5,
        backgroundColor:'#e6e6e6',
        width: 45,
        height: 45,
        borderRadius: 30
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: 150,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 5
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 80,
        backgroundColor: 'red',
    },
    infor: {
        marginLeft: 10,
        flex: 1,
    },
    nameForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    id_text: {
        fontSize: 15,
    },
    name_text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 3
    },
    describe: {
        fontStyle: 'italic',
        color: '#008066',
    },
    btnEdit: {
        paddingVertical: 5,
        borderWidth: 0.5,
        marginTop: 10,
        borderRadius: 5,
        borderColor: '#00e6b8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    editText: {
        color: '#00997a'
    },
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
    },
    navigation_text: {
        fontSize: 15,
        textAlign: 'center'
    },
    navigation_touch: {
        flex: 1,
        paddingVertical: 5,
        marginHorizontal: 5,
    }
})