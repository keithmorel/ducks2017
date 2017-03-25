import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

class ducks2017 extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Image source={require('./img/doc.png')}/>
        <Text style={{color: "red"} }>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ducks2017', () => ducks2017);
