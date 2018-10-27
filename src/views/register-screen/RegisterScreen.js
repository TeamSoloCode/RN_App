import React, { Component } from 'react';
import { Text, View, TextInput, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux'
import { typingRegisterEmail, typingRegisterPassword, typingRegisterComfirmPassword, typingUsername, selectBirthday ,registerWithFirebase} from '../../actions/registerActions';
import styles from './RegisterStyle';
import * as constants from '../../constants'
import * as color from '../../colors'
import * as strings from '../../string'
import store  from '../../store/store'
import CustomInput from '../../components/common-component/custom-input/CustomInput'
import CustomDatePicker from '../../components/common-component/custom-date-picker/CustomDatePicker';
import CustomButton from '../../components/common-component/custom-button/CustomButton';

class RegisterScreen extends Component {

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
          <View>
            <Text style={styles.text}>Register</Text>
          </View>
          <View style={styles.inputPosition}>
            <CustomInput
              onChange = {this.props.typingUsername}
              showIcon={true}
              buttonIcon={constants.LOGIN_ICON}
              hint={"Enter username"} secureText={false}
              underlineColor={color.TRANSPARENT}
            ></CustomInput></View>

          <View style={styles.inputPosition}>
            <CustomInput
              onChange = {this.props.typingRegisterEmail}
              showIcon={true}
              buttonIcon={constants.EMAIL_ICON}
              hint={"Enter email "} secureText={false}
              underlineColor={color.TRANSPARENT}
            ></CustomInput></View>

          <View style={styles.inputPosition}>
            <CustomInput
              onChange = {this.props.typingRegisterPassword}
              showIcon={true}
              buttonIcon={constants.PASSWORD_ICON}
              hint={"Enter password"} 
              secureText={true}
              underlineColor={color.TRANSPARENT}
            ></CustomInput></View>

          <View style={styles.inputPosition}>
            <CustomInput
              onChange = {this.props.typingRegisterComfirmPassword}
              showIcon={true}
              buttonIcon={constants.PASSWORD_ICON}
              hint={"Enter confirm password"} 
              secureText={true}
              underlineColor={color.TRANSPARENT}
            ></CustomInput></View>
          <View style={styles.inputPosition}>
            <CustomDatePicker></CustomDatePicker>
          </View>
          <View style={styles.buttonPosition}>
            <CustomButton name={strings.REGISTER} onClick={() => {
              this.props.registerWithFirebase(
                store.getState().register.registerAccount.registerEmail,
                store.getState().register.registerAccount.registerUsername,
                store.getState().register.registerAccount.registerPassword,
                store.getState().register.registerAccount.registerConfirmPassword,
                store.getState().register.registerAccount.registerBirthday,

              )
            }}></CustomButton>
          </View>
        </View>

      </ImageBackground>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  typingRegisterEmail: (email) => {
    dispatch(typingRegisterEmail(email))
  },
  typingRegisterPassword: (password) => {
    dispatch(typingRegisterPassword(password))
  },
  typingRegisterComfirmPassword: (confirmPassword) => {
    dispatch(typingRegisterComfirmPassword(confirmPassword))
  },
  typingUsername: (username) => {
    dispatch(typingUsername(username))
  },
  selectBirthday: (date) => {
    dispatch(selectBirthday(date))
  },
  registerWithFirebase: (email,username,password,confirmPassword,date) => {
    dispatch(registerWithFirebase(email,username,password,confirmPassword,date))
  }
})

export default connect(null, mapDispatchToProps)(RegisterScreen);