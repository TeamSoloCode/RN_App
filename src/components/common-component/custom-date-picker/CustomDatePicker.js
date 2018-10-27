import React, { Component } from 'react'
import {View ,DatePickerAndroid} from 'react-native'
import CustomInput from '../custom-input/CustomInput'
import CustomButton from '../custom-button/CustomButton';
import styles from './CustomDatePickerStyle'
import * as constants from '../../../constants'
import * as color from '../../../colors'
import { connect } from 'react-redux'
import {selectBirthday } from '../../../actions/registerActions'
  class  CustomDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
}
    dateStr = '';
    openCalender = async(stateKey,options) => {
      try {
        var newState = {};
        const {action, year, month, day} = await DatePickerAndroid.open({
          date: new Date(2001, 1, 1)
        });
        if (action !== DatePickerAndroid.dateSetAction) {
        }else {
          var date = new Date(year,month,day);
          this.dateStr= year+'-'+month+'-'+day;
          this.handleChangeDate(this.dateStr)
          this.props.selectBirthday(this.dateStr);
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
    }
    handleChangeDate = (text) => {
      this.setState({input:text})
    }
    getDate() {
      return this.input;
    }
    render() {
      const { input } = this.state
      return (
        <View style = {styles.calendarPosition} >
        <View style = {styles.iconPos} >
        <CustomButton buttonIcon={constants.CALENDAR_ICON} showIcon = {true} onClick={() => {this.openCalender()}}></CustomButton>
        </View>
        <CustomInput 
            onChange = {this.props.selectBirthday(input)}
            value = {input}
            showIcon={false}
            hint={"1990-01-01"} secureText={false}
            underlineColor={color.TRANSPARENT}>
        </CustomInput> 
        </View>
      )
    }
}
const mapDispatchToProps = (dispatch) =>({
  selectBirthday: (date) =>{
    dispatch(selectBirthday(date))
  }
})
export default connect(null, mapDispatchToProps)(CustomDatePicker);