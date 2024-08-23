import React, { useState, useRef, useEffect, useMemo } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, ImageBackground, StyleSheet, Button, PanResponder, Dimensions } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

import { styles } from '../../css/account/accountStyle';
import getCurrentAccount from '../../../utils/useCurrentAccount';

import Profile from './profile/profile';
import EditProfile from './editProfile';

const imageBackground = require('../../../../assets/images/imageBackground.png');

const Account = () => {
    const currentAccount = getCurrentAccount();

    const [modalVisible, setModalVisible] = useState(false);
    const [modalView, setModalView] = useState('Profile');

    const handleOpenModal = (view) => {
        setModalView(view);
        setModalVisible(true);
    }

    const handleCloseModal = () => {
        setModalVisible(false);
    }

    const renderModalContent = useMemo(() => {
        switch (modalView) {
            case 'Profile':
                return <Profile onCloseModal={handleCloseModal} />;
            case 'EditProfile':
                return <EditProfile onCloseModal={handleCloseModal} />;
            default:
                return null;
        }
    }, [modalView]);

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
                                    <AntDesign name="edit" size={24} color="black"  onPress={() => handleOpenModal('EditProfile')} />
                                </View>
                                <View style={styles.nameForm}>
                                    <Text style={styles.name}>{currentAccount.name}</Text>
                                    <Text style={styles.email}>{currentAccount.email}</Text>
                                </View>
                                <View style={styles.modalForm}>
                                    <TouchableOpacity style={styles.modal} onPress={() => handleOpenModal('Profile')}>
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
                                    <TouchableOpacity style={styles.modal} >
                                        <View style={styles.modal_item}>
                                            <AntDesign name="setting" size={24} color="#999999" />
                                            <Text style={styles.modal_text}>Setting</Text>
                                        </View>
                                        <MaterialIcons name="navigate-next" size={34} color="black" />
                                    </TouchableOpacity>
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
                        <Modal animationType="slide" transparent={true} visible={modalVisible}>
                            <View style={styles.centeredView}>
                                {renderModalContent}
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

export default Account;
