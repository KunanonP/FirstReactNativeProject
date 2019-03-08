/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry, Text} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
import FirstCompoment from './src/component/comp1';
import React from 'react';

// init component
// const App = () => (
//   <Header />
// );

// Render on device
AppRegistry.registerComponent('firstReactNative', () => FirstCompoment);
