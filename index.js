import {AppRegistry} from 'react-native';
import App from './src';
import Navigator from '_navigations';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
