import React, { Component } from 'react';
import { AppRegistry, NavigationStateUtils } from 'react-native';
import BaseNavigator from './App/Containers/BaseNavigator';

class MainApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      navigationState: {
        index: 0,
        routes: [{key: 'Home'}]
      },
    };

    this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  _onNavigationChange(type) {
    // Extract the navigationState from the current state:
    let {navigationState} = this.state;

    switch (type) {
      case 'push':
        // Push a new route, which in our case is an object with a key value.
        // I am fond of cryptic keys (but seriously, keys should be unique)
        const route = {key: 'Route-' + Date.now()};  // Use the push reducer provided by NavigationStateUtils
        navigationState = NavigationStateUtils.push(navigationState, route);
        break;

      case 'pop':  // Pop the current route using the pop reducer.
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    // NavigationStateUtils gives you back the same `navigationState` if nothing
    // has changed. We will only update state if it has changed.
    if (this.state.navigationState !== navigationState) {
      // Always use setState() when setting a new state!
      this.setState({navigationState});
    }
  }

  render() {
    return (
      <BaseNavigator
        navigationState={this.state.navigationState}
        onNavigationChange={this._onNavigationChange}
        onExit={this._exit}
      />
    );
  }
}

AppRegistry.registerComponent('mobatrice', () => MainApp);
