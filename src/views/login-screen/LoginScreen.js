import React, { Component } from 'react';
<<<<<<< HEAD
import { Text, View, TextInput, ImageBackground, Image } from 'react-native';
=======
import {View, TextInput, ImageBackground, Image } from 'react-native';
>>>>>>> c3539dd658e7f36b937051768a201456cde20b23
import { connect } from 'react-redux'

import { typingEmail, typingPassword, loginWithFirebase } from '../../actions/loginActions';
import styles from './LoginStyle';
import CustomInput from '../../components/common-component/custom-input/CustomInput';
import * as constants from '../../constants';
import * as color from '../../colors';
import CustomButton from '../../components/common-component/custom-button/CustomButton';
import store  from '../../store/store'
import * as strings from '../../string';
class LoginScreen extends Component {
  constructor(props) {
    super(props)
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
          <View style = {{marginTop : 150}}> 
          <View style = {{marginTop : 20}}>
          <CustomInput
            showIcon = {true}
            buttonIcon={constants.LOGIN_ICON}
            onChange={(email) => { this.props.typingEmail(email) }}
            hint={"Enter email or username"} secureText={false}
            underlineColor = {color.TRANSPARENT}
            ></CustomInput>
          </View>
          <View style = {{marginTop : 20}}>
          <CustomInput
            showIcon = {true}
            buttonIcon={constants.PASSWORD_ICON}
            onChange={(password) => { this.props.typingPassword(password) }}
            underlineColor = {color.TRANSPARENT}
            hint={"Enter password"} secureText={true}
            ></CustomInput>
          </View>
          </View>
          <View style={styles.buttonPosition}>
            <CustomButton name={strings.LOGIN} onClick = {() => {
                 this.props.loginWithFirebase(
                  store.getState().login.userAccount.email,
                  store.getState().login.userAccount.password)
            }} ></CustomButton>
            <CustomButton name={strings.REGISTER} onClick = {() => {this.props.navigation.navigate('RegisterScreen')}} ></CustomButton>
          </View>
        </View>

<<<<<<< HEAD
      </ImageBackground>
=======
        <View style={styles.inputPositionUsername}>
          <Image source={require('../../images/asset/userLoginIcon.png')} style={styles.ImageStyle} />
          <TextInput style={styles.input} keyboardType="email-address" placeholder="Input Email"
            onChangeText={(email) => {this.props.typingEmail(email)} }
            underlineColorAndroid="transparent" />
        </View>

        <View style={styles.inputPositionPassword}>
          <Image source={require('../../images/asset/passwordLoginIcon.png')} style={styles.ImageStyle} />
          <TextInput style={styles.input} keyboardType="default" textContentType="password"
            placeholder="Input Password" secureTextEntry={true}
            onChangeText={(password) => {this.props.typingPassword(password)}}
            underlineColorAndroid="transparent" />
        </View>

        <View style={styles.buttonPosition}>
          <LoginButton></LoginButton>
          <RegisterButton></RegisterButton>
        </View>
      </View>
    </ImageBackground>
>>>>>>> c3539dd658e7f36b937051768a201456cde20b23
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
}
})

export default connect(null, mapDispatchToProps)(LoginScreen);
// export default LoginScreen