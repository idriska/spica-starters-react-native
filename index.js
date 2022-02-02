/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import MainStackNavigator from './src/navigations/main-navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainStackNavigator);
