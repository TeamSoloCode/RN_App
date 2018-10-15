import React, { Component } from 'react';
import { Text, View, TextInput, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux'
import { typingRegisterEmail, typingRegisterPassword, typingRegisterComfirmPassword, typingUsername, selectBirthday } from '../../actions/registerActions';
import styles from './RegisterStyle';
import * as constants from '../../constants'
import * as color from '../../colors'
import * as strings from '../../string'
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
              showIcon={true}
              buttonIcon={constants.LOGIN_ICON}
              hint={"Enter username"} secureText={false}
              underlineColor={color.TRANSPARENT}
            ></CustomInput></View>

          <View style={styles.inputPosition}>
            <CustomInput
              showIcon={true}
              buttonIcon={constants.EMAIL_ICON}
              hint={"Enter email "} secureText={false}
              underlineColor={color.TRANSPARENT}
            ></CustomInput></View>

          <View style={styles.inputPosition}>
            <CustomInput
              showIcon={true}
              buttonIcon={constants.PASSWORD_ICON}
              hint={"Enter password"} secureText={false}
              underlineColor={color.TRANSPARENT}
            ></CustomInput></View>

          <View style={styles.inputPosition}>
            <CustomInput
              showIcon={true}
              buttonIcon={constants.PASSWORD_ICON}
              hint={"Enter confirm password"} secureText={false}
              underlineColor={color.TRANSPARENT}
            ></CustomInput></View>

          <CustomDatePicker></CustomDatePicker>
          <View style={styles.buttonPosition}>
            <CustomButton name={strings.REGISTER} onClick={() => { "" }}></CustomButton>
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
})

export default connect(null, mapDispatchToProps)(RegisterScreen);