import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, ImageBackground, StyleSheet, Button, PanResponder, Dimensions } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons, Feather, } from '@expo/vector-icons';

import { styles } from '../../css/profile/proifileStyle';
import getCurrentAccount from '../../../utils/useCurrentAccount';

const imageBackground = require('../../../../assets/images/imageBackground.png');

const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const currentAccount = getCurrentAccount();

    return (
        <>
            {
                currentAccount != null ? (
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <ImageBackground source={imageBackground} style={styles.imageBackground}>
                                <Text style={styles.title}>Profile</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.infor}>
                            <View>
                                <View style={styles.avatarForm}>
                                    <FontAwesome name="camera" size={24} color="black" />
                                    <Image source={{ uri: currentAccount.image }} style={styles.avatar} />
                                    <AntDesign name="edit" size={24} color="black" />
                                </View>
                                <View style={styles.nameForm}>
                                    <Text style={styles.name}>{currentAccount.name}</Text>
                                    <Text style={styles.email}>{currentAccount.email}</Text>
                                </View>
                                <View style={styles.modalForm}>
                                    <TouchableOpacity style={styles.modal} onPress={() => setModalVisible(true)}>
                                        <View style={styles.modal_item}>
                                            <MaterialIcons name="account-box" size={24} color="#999999" />
                                            <Text style={styles.modal_text}>Account</Text>
                                        </View>
                                        <MaterialIcons name="navigate-next" size={34} color="black" />
                                    </TouchableOpacity>
                                    <View style={styles.modal}>
                                        <View style={styles.modal_item}>
                                            <Feather name="share-2" size={24} color="#999999" />
                                            <Text style={styles.modal_text}>Share your profile</Text>
                                        </View>
                                        <MaterialIcons name="navigate-next" size={34} color="black" />
                                    </View>
                                    <View style={styles.modal}>
                                        <View style={styles.modal_item}>
                                            <AntDesign name="setting" size={24} color="#999999" />
                                            <Text style={styles.modal_text}>Setting</Text>
                                        </View>
                                        <MaterialIcons name="navigate-next" size={34} color="black" />
                                    </View>
                                    <View style={styles.modal}>
                                        <View style={styles.modal_item}>
                                            <AntDesign name="exclamationcircle" size={24} color="#999999" />
                                            <Text style={styles.modal_text}>Feedback</Text>
                                        </View>
                                        <MaterialIcons name="navigate-next" size={34} color="black" />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }}>
                            <View style={styles.centeredView}>

                            </View>
                        </Modal>
                    </View>
                ) : (
                    <Text>Loading...</Text>
                )
            }
        </>
    );
};


export default Profile;
