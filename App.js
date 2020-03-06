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
import AppNavigator from './src/navigators/AppNavigator';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    // return <Login />;
    return <AppNavigator />;
  }
}
