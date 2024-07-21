import react from "react";
import { useNavigation } from "@react-navigation/native";


function pageNavigation() {
    const navigation = useNavigation();    

    const navigateToBudget = () => {
        navigation.navigate('Budget');
    };
    const navigateToProfile = () => {
        navigation.navigate('Profile');
    };
    const navigateToNotification = () => {
        navigation.navigate('Notification');
    };
    const navigateToSetting = () => {
        navigation.navigate('Setting');
    };
    const navigateToLogin = () => {
        navigation.navigate('Login');
    };
    return {
        navigateToBudget,
        navigateToProfile,
        navigateToNotification,
        navigateToSetting,
        navigateToLogin
    }
}
export default pageNavigation