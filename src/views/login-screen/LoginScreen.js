import React, { Component } from 'react';
import {View, TextInput, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux'

import { typingEmail, typingPassword } from './../../actions/actions';
import LoginButton from '../../components/login-button/LoginButton';
import RegisterButton from '../../components/register-button/RegisterButton';
import styles from './LoginStyle';

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    

  }
  render() {
   
    return (
      <ImageBackground  
      style={styles.backgroundImage}
      blurRadius={2}
      source={require('../../images/asset/backgroundLogin.jpeg')} >
      <View style={styles.container}>

        <View style={styles.titlePosition}>
          <Image source={require('../../images/asset/logoGeolocation.png')} style={styles.logo}/>
        </View>

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
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  typingEmail: (email) => {
    dispatch(typingEmail(email))
  },
  typingPassword: (password) =>{
    dispatch(typingPassword(password))
  }
})

export default connect(null, mapDispatchToProps)(LoginScreen);