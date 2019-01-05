//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
class ItemReceive extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
                <TouchableOpacity>
                    accept
                </TouchableOpacity>
                <TouchableOpacity>
                    delete
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ItemReceive;
