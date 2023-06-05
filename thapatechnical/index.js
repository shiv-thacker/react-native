/**
 * @format
 */
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import Store from './src/reduxstore/store';
import App from './App';

const RNRedux = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
