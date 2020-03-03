import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Explore from '../screens/Explore';
import Saved from '../screens/Saved';
import Inbox from '../screens/Inbox';
import Trip from '../screens/Trip';
import LoggedOut from "../screens/LoggedOut";
import Login from "../screens/Login";
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native'

const TabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "SAVED",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-heart" color={tintColor} size={24} />
        )
      }
    },
    Trip: {
      screen: Trip,
      navigationOptions: {
        tabBarLabel: "TRIP",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../img/airbnb1.png")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "INBOX",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  },
);




export default createAppContainer(TabNavigator);