import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 35,
        display: 'flex',
    },
    title: {
        fontSize: 24,
        margin: 24,
        fontWeight: '400',
        color: '#b3b3b3'
    },
    notification: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        marginVertical: 4,
        height: 60,
        borderWidth: 1,
        borderColor: '#00e699',
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    avatar: {
        height: 40,
        width: 40
    },
    section: {
        flex: 1,
        display: 'flex',
        width: '100%',
        marginHorizontal: 5,
        height: '100%',
        justifyContent: 'center'
    },
    notif_title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#009966',
    },
    notif_content: {
        fontSize: 16
    },
    notif_date: {
        fontSize: 12,
        textAlign: 'right'
    }
})