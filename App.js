import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LoggedOut from "./src/screens/LoggedOut";
import Login from "./src/screens/Login";
// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import Explore from './screens/Explore';
// import Saved from './screens/Saved';
// import Inbox from './screens/Inbox';
// import Trip from './screens/Trip';
import Navigators from './src/components/Navigators';


export default class App extends Component {
  render() {
    // return <Login />;
    return <Navigators />;
  }
}

