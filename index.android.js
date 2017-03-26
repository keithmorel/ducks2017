// Default React Imports
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

// Component inputs
import TestCom from './components/TestCom/TestCom';
import ChatroomCom from './components/ChatroomCom/ChatroomCom';
import StartCom from './components/StartCom/StartCom'
const styles = require('./styles.js')
const constants = styles.constants;

export default class ducks2017 extends Component {

  renderScene (route, navigator) {
    switch(route.id) {
      case 'StartCom':
        return (<StartCom navigator={navigator} title="Home Screen" />)
      case 'ChatroomCom':
        return (<ChatroomCom navigator={navigator} title="Chat" />)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'StartCom'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('ducks2017', () => ducks2017);
