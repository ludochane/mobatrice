import React, { Component } from 'react';
import { NavigationExperimental, StyleSheet, PixelRatio } from 'react-native';
import HomeView from './HomeView';
import LoginView from './LoginView';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

export default class BaseNavigator extends Component {
  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props, context) {
    super(props, context);
    this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
    this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');
    this._renderScene = this._renderScene.bind(this);
  }

  // Now we finally get to use the `NavigationCardStack` to render the scenes.
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        style={styles.navigator}
      />
    );
  }

  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  // Here you could choose to render a different component for each route, but
  // we'll keep it simple.
  _renderScene(sceneProps) {
    console.log(sceneProps);

    switch (sceneProps.scene.route.key) {
      case 'Home':
        return (
          <HomeView
            route={sceneProps.scene.route}
            onPushRoute={this._onPushRoute}
            onPopRoute={this._onPopRoute}
            onExit={this.props.onExit}
          />
        );
        break;

      case 'Login':
        return (
          <LoginView />
        );
        break;
    }
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  scrollView: {
    marginTop: 64
  },
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD'
  },
  rowText: {
    fontSize: 17
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500'
  }
});
