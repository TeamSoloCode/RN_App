import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CustomButtonStyle'

export default class CustomButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.props.onClick}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{this.props.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}




