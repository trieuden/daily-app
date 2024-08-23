import react, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import useCurrentAccount from "../../../utils/useCurrentAccount";
import TimestampConverter from "../../../utils/timestampConverter";

import useIncomes from "../../../hook/useIncomes";
import useIncomeItems from "../../../hook/useIncomeItems";


const Incomes = () => {
    const currentAccount = useCurrentAccount();

    const { useIncomeList, getIncomesByUserId } = useIncomes();
    const { getIncomeItemsByIncomeId } = useIncomeItems()

    const [incomeList, setIncomeList] = useState([])

    useEffect(() => {
        const fetchIncomes = async () => {
            const incomeList = await getIncomesByUserId(currentAccount.id)
            setIncomeList(incomeList);
        }
        fetchIncomes()
    }, [useIncomeList, currentAccount.id])

    const IncomeItemQuanity = ({ item }) => {
        const [incomeItemsQuantity, setIncomeItemsQuantity] = useState(0)
        useEffect(() => {
            const fetchIncomeItem = async () => {
                const incomeItems = await getIncomeItemsByIncomeId(item.id);                
                setIncomeItemsQuantity(incomeItems.length)
            }
            fetchIncomeItem()
        }, [item])
        return <Text style={styles.total_month_items}>{incomeItemsQuantity} items</Text>
    }

    const incomeComponent = useMemo(() => (
        incomeList.length ? (
            [...incomeList].reverse().map((item) => (
                <View style={styles.income} key={item.id}>
                    <View>
                        <Text style={styles.total_month_value}>{item.total.toLocaleString('vi-VN')}</Text>
                        <Text style={styles.total_month_text}>{TimestampConverter.convert(item.month).newMonth}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IncomeItemQuanity item={item} />
                        <AntDesign name="right" size={20} color="black" />
                    </View>
                </View>
            ))
        ) : (
            <Text>Loading ....</Text>
        )
    ), [incomeList])

    return (
        <View style={styles.container}>
            <View style={styles.total_view}>
                <Text style={styles.total}>3.000.000 đ</Text>
                <Text style={styles.total_title}>Total Income</Text>
            </View>
            <View style={styles.header}>
                <View style={styles.section}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.section_title}>Rated</Text>
                        <Text style={styles.section_value}>-2%</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.section_title}>Date</Text>
                        <Text style={styles.section_value}>30/5</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.touch_newIncome}>
                    <Text style={styles.touch_title}>Add Income</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.income_month}>
                <Text style={styles.income_month_title}>Month</Text>
                <View style={styles.income_list}>
                    {incomeComponent}
                </View>
            </View>
        </View>
    )
}
export default Incomes
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    total_view: {
        display: 'flex',
        alignItems: 'center'
    },
    total: {
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#008055'
    },
    total_title: {
        marginBottom: 30,
        color: '#bfbfbf'
    },
    header: {
        display: 'flex',
        width: '97%',
        alignSelf: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        borderRadius: 20
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section_title: {
        fontSize: 12
    },
    section_value: {
        fontSize: 18,
        fontWeight: '500'
    },
    touch_newIncome: {
        backgroundColor: '#00cc88',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 8
    },
    touch_title: {
        fontSize: 16,
        fontWeight: '500'
    },
    income_month: {
        width: '97%',
        alignSelf: 'center',
        padding: 5,
        marginTop: 20
    },
    income_month_title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#004d33'
    },
    income_list: {
    },
    income: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: 'center'
    },
    total_month_value: {
        fontSize: 16,
        fontWeight: '500',
        color: '#009966'
    },
    total_month_text: {
        fontSize: 13,
        fontStyle: 'italic',
        color: '#bfbfbf'
    },
    total_month_items: {
        fontSize: 14,
        marginRight: 20
    }
})