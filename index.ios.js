// Default React Imports
import * as firebase from 'firebase'
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  AlertIOS,
  Button,
  TouchableHighlight,
  Navigator,
  StyleSheet
} from 'react-native';

// Component inputs
import TestCom from './components/TestCom/TestCom';
import CompassCom from './components/CompassCom/CompassCom';
import ChatroomCom from './components/ChatroomCom/ChatroomCom';
const styles = require('./styles.js')
const constants = styles.constants;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBLzPXiXII-BiV5a-4pweAl5-lieqmFU1g",
  authDomain: "duckhacks2017.firebaseapp.com",
  databaseURL: "https://duckhacks2017.firebaseio.com/",
  storageBucket: "gs://duckhacks2017.appspot.com/"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class ducks2017 extends Component {

  renderScene (route, navigator) {
    switch(route.id) {
      case 'TestCom':
        return (<TestCom navigator={navigator} title="Home Screen" />)
      case 'ChatroomCom':
        return (<ChatroomCom navigator={navigator} title="Chat" />)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'TestCom'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('ducks2017', () => ducks2017);
