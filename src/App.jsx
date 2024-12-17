import React, { Component } from 'react';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import { Provider } from 'react-redux';
import store from '../src/store';
import AppNavigator from './navigation/AppNavigator';

configureReanimatedLogger({
  level: ReanimatedLogLevel.error,
  strict: false,
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App;
