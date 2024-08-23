import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 35,
        backgroundColor:'white',
    },
    title: {
        fontSize: 24,
        margin: 24,
        fontWeight: '400',
        color: '#b3b3b3'
    },
    setting: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        marginVertical: 4,
        height: 60,
        borderWidth: 1,
        borderColor: '#cccccc',
        paddingHorizontal: 5,
        borderRadius: 5
    },
    icon: {
        padding: 5
    },
    section: {
        flex: 1,
        display: 'flex',
        width: '100%',
        marginHorizontal: 5,
        height: '100%',
        justifyContent: 'center'
    },
    set_title: {
        fontSize: 17,
        fontWeight: '500',
        color: '#009966',
    },
    set_content: {
        fontSize: 14
    },
    set_date: {
        fontSize: 12,
        textAlign: 'right'
    },
    btn_logout: {
        fontSize: 16.6,
        paddingVertical: 5
    }
});
