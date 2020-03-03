import React, {Component} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class Explore extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View 
           style={{
            backgroundColor: "white",
            height: 80,
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd"
          }}
          >
            <Icon name="ios-search" size={20} style={{ marginRight: 10 }}/>
            <TextInput />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});