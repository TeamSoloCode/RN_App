import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';


import styles from './../../components/register-button/RegisterButtonStyle';


export default class RegisterButton extends PureComponent {
    render() {
        return (
            <View>
                <View style={{
                    shadowOpacity: 0.5,
                }}>
                    <TouchableOpacity  onPress={() => {Alert.alert("Press!")}} >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
}