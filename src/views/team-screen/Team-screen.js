import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types';
import { data } from './data/data';
import { ItemRender } from './Item-render/ItemRender';
import { ItemSeparator } from './Item-renderSeparator/itemRenderSeparator'
export class TeamScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <ItemRender
                                email={item.email}
                                image={item.image}
                                name={item.name}></ItemRender>
                        );
                    }}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.ItemSeparator} >

                </FlatList>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    }
})
