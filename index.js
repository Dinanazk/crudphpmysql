/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Depan';
import {name as appName} from './app.json';

async function getString() {
    const str = await Promise.resolve('hello');
    return str;
  }

AppRegistry.registerComponent(appName, () => App);
