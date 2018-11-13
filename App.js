/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import ListItem from './src/screens/ListItem';
import { YellowBox } from 'react-native';

const AppNavigator = StackNavigator({
  HomeScreen: { screen: Home },
  AddItemScreen: { screen: AddItem },
  ListItemScreen: { screen: ListItem }
});


type Props = {};
export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
