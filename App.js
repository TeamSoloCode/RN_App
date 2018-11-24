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
  serviceAccount: serviceAccount
})

export default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
          <Route/>
        </Provider>
    );
  }
}