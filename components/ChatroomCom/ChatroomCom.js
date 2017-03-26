import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ChatroomCom extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 5,
          text: 'I know, I\'m a huge nerd... What are some of your interests?',
          createdAt: new Date(Date.UTC(2017, 3, 26, 18, 30, 0)),
          user: {
            _id: 2,
            name: 'Alan Turing',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
        _id: 4,
        text: 'Some of my interests are mathematics, Turing machines, cryptography and theoretical biology!',
        createdAt: new Date(Date.UTC(2017, 3, 26, 18, 30, 0)),
        user: {
          _id: 2,
          name: 'Alan Turing',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
        },
        {
          _id: 3,
          text: 'You don\'t know me too well, but my name is Alan Turing.',
          createdAt: new Date(Date.UTC(2017, 3, 26, 18, 30, 0)),
          user: {
            _id: 2,
            name: 'Alan Turing',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
          {
            _id: 2,
            text: 'It\'s nice to meet you.',
            createdAt: new Date(Date.UTC(2017, 3, 26, 18, 30, 0)),
            user: {
              _id: 2,
              name: 'Alan Turing',
              avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
          },
          {
            _id: 1,
            text: 'Hello DuckHacks!',
            createdAt: new Date(Date.UTC(2017, 3, 26, 18, 30, 0)),
            user: {
              _id: 2,
              name: 'Alan Turing',
              avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

AppRegistry.registerComponent('ChatroomCom', () => ChatroomCom);
