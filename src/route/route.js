import {
    createStackNavigator,
} from 'react-navigation';
import LoginScreen from "../views/login-screen/LoginScreen";
import RegisterScreen from '../views/register-screen/RegisterScreen';
import  TeamScreen  from '../views/team-screen/Team-screen';
import ReceiveInvitation from '../views/receive-invitation-screen/receiveInvitationScreen';
import { TEAM_SCREEN,REGISTER_SCREEN,RECEIVE_SCREEN } from './constant';
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
                title: REGISTER_SCREEN,
            }
        },
        TeamScreen: {
            screen: TeamScreen,
            navigationOptions: {
                title: TEAM_SCREEN
            }
        },
        
        InviationScreen: {
            screen: ReceiveInvitation,
            navigationOptions: {
                title: RECEIVE_SCREEN
            }
        }
    },

    {
        initialRouteName: 'LoginScreen',
    }
);
