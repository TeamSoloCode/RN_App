import React from 'react';
import { Provider } from 'react-redux'
import * as firebase from 'firebase'

import store from './src/store/store'
import serviceAccount from './serviceAccountKey.json'
import { Route } from './src/route/route';

/**
 * Kết nối với firebase
 */
firebase.initializeApp({
  serviceAccount: serviceAccount,
  apiKey: "AIzaSyCDhqmsyxGYMOxkI1TUbDPccTrmIAJxyY0",
  authDomain: "fir-hwai.firebaseapp.com",
  databaseURL: "https://fir-hwai.firebaseio.com",
  projectId: "firebase-hwai",
  storageBucket: "firebase-hwai.appspot.com",
  messagingSenderId: "456694018002"
});

export default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
          <Route/>
        </Provider>
    );
  }
}