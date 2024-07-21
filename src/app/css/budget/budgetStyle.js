import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor:'white',
    },
    header: {
        width: "100%",
        height: 90,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor:'white'
    },
    values: {
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor:'white'
    },
    button: {
        height: 35,
        width: 98,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#00cc88',
    },
    button_left: {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: '#00cc88',
    },
    button_right: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    button_text: {
        fontWeight: 'bold',
    },
    date_form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        margin: 15,
        marginRight: 0
    },
    moneySpent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        overflow: 'hidden',
        padding: 3,
        borderRadius: 5,
        borderColor: 'gray'
    },
    moneySpent_input: {
        height: 35,
        width: 100,
        margin: 3,
        fontSize: 18
    },
    moneySpent_text: {
        fontSize: 17,
        color: 'gray',
    },
    spendTypes: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 15
    },
    spendTypesHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    spendTypesHeader_text: {
        fontSize: 18,
        marginRight: 10,
        color: '#006652'
    },
    spendTypeList_collapsed: {
        display: 'flex',
        flexDirection: 'row',
    },
    spendTypeList: {
        marginTop: 10,
        marginBottom: 5
    },
    spendType_view: {
        borderColor: '#00cc88',
        height: 70,
        width: 70,
        margin: 5,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        padding: 3,
    },
    newSpendType_title: {
        fontSize: 36,
        textAlign: 'center',
        color: 'green',
        fontWeight: '500'
    },
    spendType_title: {
        fontSize: 16,
        height: 20,
        textAlign: 'center',
    },
    buttonSave: {
        borderColor: '#00cc88',
        borderWidth: 1,
        width: 100,
        marginVertical: 15,
        alignSelf: 'flex-end',
        borderRadius: 7,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#009966'
    },
    buttonSave_title: {
        fontWeight: '500',
        fontSize: 18,
        color: 'white'
    },
    spendDecription: {
        borderBottomWidth: 1,
        width: '80%',
        padding: 4,
        fontSize: 18,
        backgroundColor: '#f2f2f2',
        borderRadius: 2
    },
    spendList: {
        width: '100%',
    },
})