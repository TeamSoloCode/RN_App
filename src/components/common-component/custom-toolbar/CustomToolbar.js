import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './CustomToolbarStyle';

export default class CustomToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.props.showButtonBack = false;
    }
    render() {
        return (
            <View style={styles.toolbar}>
                {this.props.showButtonBack ?
                    <TouchableOpacity onPress={this.props.onBackPress}>
                        <Image style={styles.iconback}
                            source={require('../../../images/asset/arrowback/arrowback2.png')} />
                    </TouchableOpacity> : null}
                <Text style={styles.title}>{this.props.title}</Text>

            </View>
        );
    }
}