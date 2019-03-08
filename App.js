/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'My name is Kunanon P\n' +
    'This is my first React Native project',
});

// type Props = {};
export default class App extends Component {
  // render for represent ui app
  render () {
    // JSX
    return (
      // Container
      <View style={{flex: 1, flexDirection: 'column',
                    backgroundColor: '#F5FCFF',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
        <Text style={{textAlign: 'center', color: '#FF0000'}}>
          My Mobile App 
          First app
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
