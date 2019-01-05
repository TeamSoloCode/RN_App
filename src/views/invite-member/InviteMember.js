import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Platform } from 'react-native'
import AutoCompleteInput from '../../components/AutoComplete-Input/AutoCompleteInput'
import data from '../../components/AutoComplete-Input/data'
export default class InviteMember extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <AutoCompleteInput 
                hint={'Enter Member'}
                data={data}
                keyItem={'name'}>
                </AutoCompleteInput>
            </View>
        );
    }
}