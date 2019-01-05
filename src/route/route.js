import {
    createStackNavigator,
} from 'react-navigation';
import LoginScreen from "../views/login-screen/LoginScreen";
import RegisterScreen from '../views/register-screen/RegisterScreen';
import  TeamScreen  from '../views/team-screen/Team-screen';
import ReceiveInvitation from '../views/receive-invitation-screen/receiveInvitationScreen';
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
        },
        TeamScreen: {
            screen: TeamScreen,
            navigationOptions: {
                header: null
            }
        },
        
        InviationScreen: {
            screen: ReceiveInvitation,
            navigationOptions: {
                header: null
            }
        }
    },

    {
        initialRouteName: 'InviationScreen',
    }
);
