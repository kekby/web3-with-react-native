/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import '../../../shim';

import Web3 from 'web3';

const web3 = new Web3(
  new Web3.providers.HttpProvider('https://mainnet.infura.io'),
);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    web3.eth.getBlock('latest')
      .then(console.log)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Bulat is here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
