import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  Button,
  Switch,
  StyleSheet
} from 'react-native';


import { Dial } from 'react-native-dial';

export default class StartCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degree : '0'
    };
  }

  changeValue(r){
    this.setState({
      degree : r.toFixed(1),
    }, function () {
      if(r > 230 && r < 250){
        this.props.navigator.push({
          id: 'ChatroomCom'
        })
      }
    }.bind(this));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to OONO!</Text>
        <Text style={styles.instructions}>Spin the Dial to Find a Partner!</Text>
        <Text style={styles.instructions}>{this.state.degree}</Text>
        <Dial
          onValueChange={(r) => this.changeValue(r)}
        />
        <Switch
          value={this.state.switchValue}
          onValueChange={(value) => this.onSwitchChange(value)} />
        <Button title='Video' onPress={(title) => this.onPress(title)} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('StartCom', () => StartCom);
