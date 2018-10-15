import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './CustomButtonStyle'
import { EMPTY_STRING, NONE } from '../../../string';

export default class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.props.showIcon = false;
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.props.onClick}>
                    <View style={!this.props.showIcon ? styles.button : styles.backgroundIcon}>
                        {
                            this.props.showIcon ? <Image source={this.props.buttonIcon}
                                style={styles.ImageStyle} /> : null
                        }
                        <Text style={styles.buttonText}>{this.props.showIcon = false ? EMPTY_STRING : this.props.name}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}




