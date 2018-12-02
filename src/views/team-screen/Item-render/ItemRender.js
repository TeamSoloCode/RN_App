import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { styles } from './ItemRenderStyle';
export class ItemRender extends React.Component {
    constructor(props) {
        super(props);
        this.props.image = '',
            this.props.turnOffMenu = false,
            this.state = {
                showMenu: false
            };

    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.container} onPress={this.props.itemClickListener}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.image }}></Image>
                    <Text style={styles.email}>{this.props.email}</Text>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <TouchableOpacity style={styles.buttonForward} onPress={this.props.itemClickForward}>
                        <Image source={require('../../../images/asset/arrowforward/arrowForward.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuVertical} onPress={
                        () => {

                            if (this.state.showMenu || this.props.turnOffMenu) {
                                this.setState({ showMenu: false })
                            } else {
                                this.setState({ showMenu: true })
                            }
                        }
                    }>
                        <Image source={require('../../../images/asset/verticalBottom/vertical_bottom1.png')} />
                    </TouchableOpacity>
                </TouchableOpacity >
                {this.state.showMenu === true ? <TouchableOpacity style={styles.menuItem} onPress={this.props.itemClickForward}>
                    <Text >Show</Text>
                </TouchableOpacity> : null}

            </View>
        );
    }
}
