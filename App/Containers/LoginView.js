import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TextInput placeholder='Host' />
        <TextInput placeholder='Port' keyboardType='numeric' />
        <TextInput placeholder='Login' />
        <TextInput placeholder='Password' secureTextEntry={true} />
      </View>
    );
  }
}
