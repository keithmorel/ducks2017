// Default React Imports
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

// Component inputs
import TestCom from './components/TestCom/TestCom';
import CompassCom from './components/CompassCom/CompassCom';

export default class ducks2017 extends Component {
  render() {
    return (
        <TestCom />
    );
  }
}

AppRegistry.registerComponent('ducks2017', () => ducks2017);
