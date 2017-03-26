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
      if((r > 170) && (r < 190)){
        this.props.navigator.push({
          id: 'ChatroomCom'
        })
      }
    }.bind(this));
  }

  changeStyle(deg){
    if(((180 < deg) && (deg < 200)) || ((180 > deg) && (deg > 160))){
      return({
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(213,34,57,1)'})
    }
    if(((200 < deg) && (deg < 240)) || ((160 > deg) && (deg > 120))){
      return({
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(213,34,57,0.8)'})
    }
    if(((240 < deg) && (deg < 300)) || ((120 > deg) && (deg > 60))){
      return({
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(213,34,57,0.5)'})
    }
    if(((300 < deg) && (deg < 360)) || ((60 > deg) && (deg > 0))){
      return({
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(213,34,57,0.3)'})
    }
    else{
      return({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFDFD',
      });
    }
  }

  render() {
    return (
      <View style={this.changeStyle(this.state.degree)}>
        <Text style={styles.title}>Welcome to OONO!</Text>
        <Text style={styles.instructions}>Spin the Dial to Find a Partner!</Text>
        <Text style={styles.degree}>{this.state.degree}°</Text>
        <Dial
          onValueChange={(r) => this.changeValue(r)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#77CDC5',
  },
  degree: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffeccf',
    margin: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#22D6BE',
    margin: 10,
  },
  instructions: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#A9A9A9',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('StartCom', () => StartCom);
