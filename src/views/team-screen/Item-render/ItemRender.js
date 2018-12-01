import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from './ItemRenderStyle';
export class ItemRender extends React.Component {
    constructor(props) {
        super(props);
        this.props.image = ''
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: '' + this.props.image + '' }}></Image>
                <Text style={styles.email}>{this.props.email}</Text>
                <Text style={styles.name}>{this.props.name}</Text>
            </View >
        );
    }
}
