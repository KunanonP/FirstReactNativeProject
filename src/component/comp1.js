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

// type Props = {};
export default class Header extends Component {
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
          <MyText msg="test message from main component"
          test="another message" interval={1000}>
          </MyText>
      </View>
    );
  }
}

// sub component
class MyText extends Component {

  constructor(props){
    super(props)
    // initial default state
    this.state = {isVisible: true};

    setInterval(() => {
      this.setState(oldState =>{
        return {isVisible: !oldState.isVisible}
      })
    }, this.props.interval)
  }

  render(){
    let display = this.state.isVisible ? this.props.msg : '';
    return(
      <Text style={{textAlign: 'center', color: '#FF0000'}}>
        My Mobile App
        First app
        {'\n'+display}{'\n'}{this.props.test}
      </Text>
    );
  }
}
