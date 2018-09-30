import React, { Component } from 'react';
import {Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux'

import LoginButton from '../../components/login-button/LoginButton';
import RegisterButton from '../../components/register-button/RegisterButton';
import styles from './LoginStyle';

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.props.email = ''
    this.props.password = ''
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.titlePosition}>
          <Text style={styles.Text}>Login</Text>
        </View>

        <View style={styles.inputPosition}>
          <TextInput style={styles.input} keyboardType="email-address" placeholder="Input Email"
            onChangeText = { (text) => {this.props.email = text} }
          />
          <TextInput style={styles.input} keyboardType="default" textContentType="password" 
            placeholder="Input Password" secureTextEntry={true}
            onChangeText= {(text) => {this.props.password = text}}
          />
        </View>

        <View style={styles.buttonPosition}>
          <LoginButton email = {this.props.email} password = {this.props.password}></LoginButton>
          <RegisterButton></RegisterButton>
        </View>
      </View>
    );
  }
}

export default connect()(LoginScreen);