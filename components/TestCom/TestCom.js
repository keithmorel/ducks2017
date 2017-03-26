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

export default class TestCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      switchValue: false
    };
  }

  onPress(title) {
    this.props.navigator.push({
      id: 'ChatroomCom',
      value: title
    })
  }

  onSwitchChange(value) {
    this.props.navigator.push({
      id: 'ChatroomCom',
      value: value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/doc.png')}/>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestCom', () => TestCom);
