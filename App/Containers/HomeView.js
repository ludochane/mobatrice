import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RoundedButton from '../Components/RoundedButton';

export default class HomeView extends Component {

  gotoLogin () {

  }

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.bigger}>Mobatrice</Text>
        <RoundedButton onPress={this.gotoLogin}>Login</RoundedButton>

        <Text style={styles.row}>
          Route: {this.props.route.key}
        </Text>
        <RoundedButton onPress={this.props.onPushRoute}>
          Tap me to load the next scene
        </RoundedButton>
        <RoundedButton onPress={this.props.onPopRoute}>
          Tap me to go back
        </RoundedButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigger: {
    fontSize: 40
  }
});
