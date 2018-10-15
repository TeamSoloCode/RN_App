import {
    createStackNavigator,
} from 'react-navigation';
import LoginScreen from "../views/login-screen/LoginScreen";
import RegisterScreen from '../views/register-screen/RegisterScreen';
export const Route = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        RegisterScreen: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null
            }
        }
    },

    {
        initialRouteName: 'RegisterScreen',
    }
);
