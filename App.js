/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, YellowBox} from 'react-native';
import { createTabNavigator } from 'react-navigation';

 import Home from './screens/Home';
 import AddScreen from './screens/AddScreen';



export default createTabNavigator({
    Home: { screen: Home },
    AddItem: { screen: AddScreen },
});
