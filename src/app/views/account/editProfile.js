import react, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Switch } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const EditProfile = ({ onCloseModal }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { onCloseModal(false) }} style={styles.btnBack}>
                    <AntDesign name="close" size={28} color="black" />
                </TouchableOpacity>
                <Text style={styles.modal_title}>Edit profile</Text>
                <TouchableOpacity onPress={() => { onCloseModal(false) }} style={styles.btnBack}>
                    <Text style={styles.touch_save_title}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.box}>
                    <View style={styles.section_a}>
                        <View>
                            <Text style={styles.title}>Name</Text>
                            <Text>Huỳnh Ngọc Triều</Text>
                        </View>
                        <TouchableOpacity style={styles.touch_avatar}>
                            <AntDesign name="adduser" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.section_b}>
                        <Text style={styles.title}>Bio</Text>
                        <TextInput placeholder="+ White Bio" placeholderTextColor={'#a6a6a6'} />
                    </View>
                    <View style={styles.section_b}>
                        <Text style={styles.title}>Link</Text>
                        <TextInput placeholder="+ Add link" placeholderTextColor={'#a6a6a6'} />
                    </View>
                    <View style={[styles.section_a, { borderBottomWidth: 0 }]}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>Private Profile</Text>
                            <Text>You won't be able to reply to others unless they follow you</Text>
                        </View>
                        <View style={styles.button_switch}>
                            <Switch
                                trackColor={'#81b0ff'}
                                thumbColor={'#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default EditProfile;

const styles = StyleSheet.create({
    container: {
        height: '95%',
        width: '100%',
        backgroundColor: 'white',
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
        overflow: 'hidden'
    },
    header: {
        backgroundColor: '#e6e6e6',
        paddingVertical: 5,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modal_title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    btnBack: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        width: 45,
        height: 45,
    },
    touch_save_title: {
        fontSize: 17,
        color: '#00b359'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        borderWidth: 1,
        width: '80%',
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
        borderColor: '#d9d9d9'
    },
    section_a: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        height: 60,
        alignItems: 'center',
    },
    section_b: {
        display: 'flex',
        justifyContent: 'center',
        marginHorizontal: 8,
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        height: 60,
        flexDirection: 'column',
    },
    title: {
        fontWeight: 'bold',
        paddingBottom: 2,
        fontSize: 15
    },
    touch_avatar: {
        backgroundColor: '#b3ffe6',
        padding: 5,
        borderRadius: 20
    },
})
