import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import store from './../../store/store';

import styles from './LoginButtonStyle'
import { loginWithFirebase } from './../../actions/actions';

class LoginButton extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity 
                    onPress={() => {
                        this.props.loginWithFirebase(
                            store.getState().login.userAccount.email,
                            store.getState().login.userAccount.password)
                    }}
                    onShowUnderDelay={()=>{alert("Thông báo");}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    loginWithFirebase: (email, password) => {
        dispatch(loginWithFirebase(email, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
