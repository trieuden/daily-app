import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    budget_month: {
        display: 'flex',
        flex: 1,
        width: screenWidth - 30,
        marginTop: 10,
        borderWidth: 0.5,
        paddingTop: 9,
        borderRadius: 5
    },
    budget_select: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 9
    },
    budget_touch: {
        height: 30,
        width: 95,
        borderColor: '#d9d9d9',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    budget_touch_text: {
        fontSize: 16,
        color: '#008055'
    },
    spend_chart: {
        backgroundColor: 'white',
        paddingVertical: 15,
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
    },
    chart_title: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#006644'
    },
    chart: {

    },
    spend_select_date: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

});