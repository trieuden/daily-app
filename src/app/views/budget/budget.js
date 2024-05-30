import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RNDateTimePicker from "@react-native-community/datetimepicker";

import useSpendTypes from '../../../hook/useSpendTypes';
import useSpends from '../../../hook/useSpends';
import useSpendItems from '../../../hook/useSpendItems';

import { styles } from '../../css/budget/budgetStyle';
import Spend from './spend';

const Budget = () => {
    const [date, setDate] = useState(new Date());
    const [expanded, setExpanded] = useState(false);
    
    const [spendTypeListData, setSpendTypeListData] = useState([]);
    const [spendTypeList, setSpendTypeList] = useState([]);
    const [spendList, setSpendList] = useState([]);

    const { useSpendTypesList } = useSpendTypes();
    const { useSpendList } = useSpends();

    useEffect(() => {
        setSpendTypeList(useSpendTypesList);
        setSpendList(useSpendList);

        setSpendTypeListData(useSpendTypesList);
        if (useSpendTypesList) {
            setSpendTypeListData([{ id: 0, name: '+' }, ...useSpendTypesList]);
        }
    }, [useSpendTypesList, useSpendList]);

    const renderItem = ({ item }) => {
        if (item.id === 0) {
            return (
                <View style={styles.spendType_view}>
                    <Text style={styles.newSpendType_title}>{item.name}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.spendType_view} key={item.id}>
                    <Text style={styles.spendType_title}>{item.name}</Text>
                    <Image source={{ uri: item.image }} style={{ height: 25, width: 25 }} />
                </View>
            );
        }
    };

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
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
                        <RNDateTimePicker value={date} />
                    </View>
                    <View style={styles.moneySpent}>
                        <Text style={styles.moneySpent_text}>Money Spent:</Text>
                        <TextInput style={styles.moneySpent_input} inputMode="numeric" />
                    </View>
                    <View style={styles.spendTypes}>
                        <View style={styles.spendTypesHeader}>
                            <Text style={styles.spendTypesHeader_text}>Spend Types</Text>
                            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                                <AntDesign name="right" size={18} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.spendTypeList}>
                            {spendTypeList != null ? (
                                expanded ? (
                                    <FlatList
                                        data={spendTypeListData}
                                        renderItem={renderItem}
                                        numColumns={5}
                                        keyExtractor={(item) => item.id.toString()}
                                    />
                                ) : (
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                        <View style={styles.spendTypeList_collapsed}>
                                            {spendTypeListData.map((item) => (
                                                <View style={styles.spendType_view} key={item.id}>
                                                    <Text
                                                        style={
                                                            item.id === 0
                                                                ? styles.newSpendType_title
                                                                : styles.spendType_title
                                                        }
                                                    >
                                                        {item.name}
                                                    </Text>
                                                    <Image
                                                        source={{ uri: item.image }}
                                                        style={{ height: item.id === 0 ? 0 : 25, width: 25 }}
                                                    />
                                                </View>
                                            ))}
                                        </View>
                                    </ScrollView>
                                )
                            ) : (
                                <Text>Loading ....</Text>
                            )}
                        </View>
                        <View>
                            <Text style={styles.spendTypesHeader_text}>Note</Text>
                            <TextInput multiline={true} style={styles.spendDecription} />
                        </View>
                        <TouchableOpacity style={styles.buttonSave}>
                            <Text style={styles.buttonSave_title}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.spendList}>
                    {spendList != null ? (
                        spendList.map((item) => (
                            <View key={item.id}>
                                <Spend spend={item} />
                            </View>
                        ))
                    ) : (
                        <Text>Loading ....</Text>
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

export default Budget;
