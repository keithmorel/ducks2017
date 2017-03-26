// Default React Imports
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

// Component inputs
import TestCom from './components/TestCom/TestCom';
import CompassCom from './components/CompassCom/CompassCom';
import ChatroomCom from './components/ChatroomCom/ChatroomCom';
const styles = require('./styles.js')
const constants = styles.constants;

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
