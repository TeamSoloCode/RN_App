import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Platform } from 'react-native'
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { ItemRender } from './Item-render/ItemRender';
import { ItemSeparator } from './Item-renderSeparator/itemRenderSeparator'
import store from './../../store/store';
import { requestFetchAllTeamMember } from '../../actions/fetchAllTeamMemberActions'
import { BLUE, WHITE } from '../../colors';
import CustomToolbar from '../../components/common-component/custom-toolbar/CustomToolbar';
class TeamScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.requestFetchAllTeamMember(
            {
                userId: store.getState().myTeam.userId,
                teamId: store.getState().myTeam.teamId
            }
        )
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.data = store.getState().myTeam.members
            this.forceUpdate()
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <View style={styles.container}>

                <CustomToolbar
                    title={'TEAM'} showButtonBack={Platform.OS === 'ios' ? true : false}
                    onBackPress={() => { this.props.navigation.goBack(null) }}>
                </CustomToolbar>


                <FlatList
                    data={typeof (this.data) == 'undefined' || this.data == null ? [] : this.data}
                    renderItem={({ item }) => {
                        return (
                            <ItemRender
                                email={item.email}
                                image={item.image}
                                name={item.name}
                                itemClickListener={() => {
                                    alert(item.email + '\n' + item.name);
                                }}
                                itemClickForward={() => {
                                    alert(item.email + '\n' + item.name);
                                }}

                            ></ItemRender>
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
        backgroundColor: '#EEEEEE'
    },

})

const mapDispatchToProps = (dispatch) => ({
    requestFetchAllTeamMember: (body) => {
        dispatch(requestFetchAllTeamMember(body))
    }
})

export default connect(null, mapDispatchToProps)(TeamScreen);
