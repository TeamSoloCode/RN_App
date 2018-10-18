import React, { Component } from 'react'
import {View} from 'react-native'
import CustomInput from '../custom-input/CustomInput'
import CustomButton from '../custom-button/CustomButton';
import styles from './CustomDatePickerStyle'
import * as constants from '../../../constants'
import * as color from '../../../colors'

export default class CustomDatePicker extends Component {
    render() {
      return (
        <View style = {styles.calendarPosition} >
        <View style = {styles.iconPos} >
        <CustomButton buttonIcon={constants.CALENDAR_ICON} showIcon = {true} onClick={() => { }}></CustomButton>
        </View>
        <CustomInput 
            showIcon={false}
            hint={"1990-01-01"} secureText={false}
            underlineColor={color.TRANSPARENT}
          ></CustomInput> 
        </View>
      )
    }
}