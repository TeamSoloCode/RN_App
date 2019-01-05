import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { styles } from './ItemAutoCompleteStyle';
export class ItemAutoComplete extends Component {
    constructor(props) {
        super(props);
        this.props.itemData;
    }
    render(){
        return(
            <View>
                <Text>{this.props.itemData}</Text>
            </View>
        );
    }
}