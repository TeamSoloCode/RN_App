import React, { Component } from 'react';
import { View, TextInput,Image } from 'react-native';
import  styles  from './CustomInputStyle';
import PropTypes from 'prop-types'; 
import * as constants from '../../../constants';
import * as color from '../../../colors';

class CustomInput extends Component { 
  constructor(props){
    super(props);
    this.props.secureText = false;
    this.props.textContent = 'none';
    this.props.buttonIcon = '';
    this.props.showIcon = false;
  }
 
  render() {
    return (
      <View style={!this.props.showIcon ? styles.inputNoIcon : styles.inputPosition}>
      {
        this.props.showIcon ?  <Image source={this.props.buttonIcon} style={styles.ImageStyle} /> : null
      }
        <TextInput style={styles.input}  placeholder = {this.props.hint}
          value = {this.props.value}
          onChangeText={ this.props.onChange}
          secureTextEntry = {this.props.secureText}
          textContentType = {this.props.textContent}
          underlineColorAndroid = {this.props.underlineColor} />
      </View>
    );
  }
}

CustomInput.propTypes = {
  hint : PropTypes.string,
  secureText : PropTypes.bool
};

export default CustomInput;
