import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux'

import { typingEmail, typingPassword, loginWithFirebase } from '../../actions/loginActions';
import styles from './LoginStyle';
import CustomInput from '../../components/common-component/custom-input/CustomInput';
import * as constants from '../../constants';
import * as color from '../../colors';
import CustomButton from '../../components/common-component/custom-button/CustomButton';
import store from '../../store/store'
import * as strings from '../../string';


import { requestCheckHasTeam } from '../../actions/hasTeamActions';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {

      if(store.getState().login.userAccount.loggedBy != null){
        this.props.navigation.navigate('TeamScreen')
      }
    })
}

componentWillUnmount() {
    this.unsubscribe();
}
  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        blurRadius={2}
        source={constants.IMAGE_BACKGROUND} >
        <View style={styles.container}>
          <View style={styles.titlePosition}>
            <Image source={constants.IMAGE_GEOLOCATION} style={styles.logo} />
          </View>
          <View style={{ marginTop: 150 }}>
            <View style={{ marginTop: 20 }}>
              <CustomInput
                showIcon={true}
                buttonIcon={constants.LOGIN_ICON}
                onChange={(email) => { this.props.typingEmail(email) }}
                hint={"Enter email or username"} secureText={false}
                underlineColor={color.TRANSPARENT}
              ></CustomInput>
            </View>
            <View style={{ marginTop: 20 }}>
              <CustomInput
                showIcon={true}
                buttonIcon={constants.PASSWORD_ICON}
                onChange={(password) => { this.props.typingPassword(password) }}
                underlineColor={color.TRANSPARENT}
                hint={"Enter password"} secureText={true}
              ></CustomInput>
            </View>
          </View>
          <View style={styles.buttonPosition}>
            <CustomButton name={strings.LOGIN} onClick={() => {
              this.props.loginWithFirebase(
                store.getState().login.userAccount.email,
                store.getState().login.userAccount.password)
            }
            
            } ></CustomButton>
            <CustomButton name={strings.REGISTER} onClick={() => { this.props.navigation.navigate('RegisterScreen') }} ></CustomButton>
          </View>
           <View style={styles.buttonPosition}>
          <CustomButton name={'cc'} onClick={() => {
              this.props.requestCheckHasTeam({ userId : store.getState().team.userId })
              //this.props.navigation.navigate('TeamScreen')
              }}></CustomButton>
          </View>
          
        </View>

      </ImageBackground>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  typingEmail: (email) => {
    dispatch(typingEmail(email))
  },
  typingPassword: (password) => {
    dispatch(typingPassword(password))
  },
  loginWithFirebase: (email, password) => {
    dispatch(loginWithFirebase(email, password))
  },
  requestCheckHasTeam: (userId) => {
    dispatch(requestCheckHasTeam(userId))
  }
})

export default connect(null, mapDispatchToProps)(LoginScreen);
// export default LoginScreen