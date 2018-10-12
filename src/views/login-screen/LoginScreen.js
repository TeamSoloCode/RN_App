import React, { Component } from 'react';
import {Text, View, TextInput } from 'react-native';
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
      <View style={{ flex: 1 }}>
        <View style={styles.titlePosition}>
          <Text style={styles.Text}>Login</Text>
        </View>

        <View style={styles.inputPosition}>
          <TextInput style={styles.input} keyboardType="email-address" placeholder="Input Email"
            onChangeText = {(email) => {this.props.typingEmail(email)} }
          />
          <TextInput style={styles.input} keyboardType="default" textContentType="password" 
            placeholder="Input Password" secureTextEntry={true}
            onChangeText= {(password) => {this.props.typingPassword(password)}}
          />
        </View>

        <View style={styles.buttonPosition}>
          <LoginButton></LoginButton>
          <RegisterButton></RegisterButton>
        </View>
      </View>
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