import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, SectionList, SafeAreaView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import BudgetController from '../../controller/budgetController';

import useSpendTypes from '../../../hook/useSpendTypes';
import useSpends from '../../../hook/useSpends';
import useSpendItems from '../../../hook/useSpendItems';

import { styles } from '../../css/budget/budgetStyle';
import Spend from './spend';
import useCurrentAccount from '../../../utils/useCurrentAccount';

const Budget = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());

    const [expanded, setExpanded] = useState(false);
    const [currentType, setCurrentType] = useState(0);
    const [moneySpent, setMoneySpent] = useState('');
    const [description, setDescription] = useState('');

    const [spendTypeListData, setSpendTypeListData] = useState([]);
    const [spendList, setSpendList] = useState([]);

    const { useSpendTypesList } = useSpendTypes();
    const { useSpendList, getSpendByDate, addSpend, getSpendMax, updateSpend, getSpendTypeByUserId } = useSpends();
    const { addSpendItem } = useSpendItems();

    const currentAccount = useCurrentAccount();

    useEffect(() => {
        const fetchSpends = async () => {
            const spendList = await getSpendTypeByUserId(currentAccount.id);
            setSpendList(spendList);
        }

        if (useSpendTypesList) {
            setSpendTypeListData([{ id: -1, name: '+' }, ...useSpendTypesList]);
            fetchSpends();
        }
    }, [currentAccount.id, refreshKey]);

    const chooseSpendType = useCallback((spendType) => {
        setCurrentType(spendType.id);
        setMoneySpent(spendType.price.toString());
    }, []);

    const newSpend = async () => {
        try {
            const budgetController = await BudgetController(currentAccount, currentType, moneySpent, description, getSpendByDate, currentDate, addSpend, addSpendItem, updateSpend);
            setRefreshKey(budgetController.data);

            Alert.alert('App', budgetController.value, [
                { text: 'OK' },
            ]);

        } catch (error) {
            console.error(error);
        }
    }

    const renderItem = useCallback(({ item }) => {
        if (item.id === -1) {
            return (
                <View style={styles.spendType_view}>
                    <Text style={styles.newSpendType_title}>{item.name}</Text>
                </View>
            );
        } else {
            return (
                <TouchableOpacity
                    style={[styles.spendType_view, { backgroundColor: currentType === item.id ? '#e6fff7' : 'white' }]}
                    key={item.id}
                    onPress={() => chooseSpendType(item)}
                >
                    <Text style={styles.spendType_title}>{item.name}</Text>
                    <Image source={{ uri: item.image }} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>
            );
        }
    }, [currentType, chooseSpendType]);



    const spendComponents = useMemo(() => (
        spendList.length ? (
            [...spendList].reverse().map((item) => (
                <View key={item.id}>
                    <Spend spend={item} refreshKey={refreshKey} />
                </View>
            ))
        ) : (
            <Text>Loading ....</Text>
        )
    ), [spendList, refreshKey]);

    return (
        <SectionList
            sections={[{ title: 'Main', data: [{}] }]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={() => (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={[styles.button, styles.button_left]}>
                            <Text style={[styles.button_text, { color: 'white' }]}>Spend</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.button_right]}>
                            <Text style={styles.button_text}>Income</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.values}>
                        <View style={styles.date_form}>
                            <RNDateTimePicker value={currentDate} onChange={(event, date) => setCurrentDate(date)} />
                        </View>
                        <View style={styles.moneySpent}>
                            <Text style={styles.moneySpent_text}>Money Spent:</Text>
                            <TextInput style={styles.moneySpent_input} inputMode="numeric" value={moneySpent.toLocaleString('vi-VN')} onChangeText={(value) => setMoneySpent(value)} />
                        </View>
                        <View style={styles.spendTypes}>
                            <View style={styles.spendTypesHeader}>
                                <Text style={styles.spendTypesHeader_text}>Spend Types</Text>
                                <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                                    <AntDesign name="right" size={18} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.spendTypeList}>
                                {spendTypeListData.length ? (
                                    expanded ? (
                                        <SafeAreaView>
                                            <FlatList
                                                data={spendTypeListData}
                                                renderItem={renderItem}
                                                numColumns={5}
                                                keyExtractor={(item) => item.id.toString()}
                                            />
                                        </SafeAreaView>
                                    ) : (
                                        <FlatList
                                            data={spendTypeListData}
                                            renderItem={renderItem}
                                            keyExtractor={(item) => item.id.toString()}
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        />
                                    )
                                ) : (
                                    <Text>Loading ....</Text>
                                )}
                            </View>
                            <View>
                                <Text style={styles.spendTypesHeader_text}>Note</Text>
                                <TextInput multiline={true} style={styles.spendDecription} onChangeText={(text) => setDescription(text)} />
                            </View>
                            <TouchableOpacity style={styles.buttonSave} onPress={newSpend}>
                                <Text style={styles.buttonSave_title}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.spendList}>
                        {spendComponents}
                    </View>
                </View>
            )}
        />
    );
};

export default Budget;
