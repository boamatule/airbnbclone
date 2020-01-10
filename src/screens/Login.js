import React, { Component} from "react";
import { PropTypes } from "prop-types";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import colors from "../styles/colors";
import InputField from "../components/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";


export default class Login extends Component {
  handleNextButton() {
    alert("Next Button Press")
  }
  render() {
    return (
      <KeyboardAvoidingView style={[styles.avoidView, styles.wrapper]}  behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField 
              labelText="EMAIL ADDRESS" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="email" 
              customStyle={{marginBottom:30}} 
                
            />
            <InputField 
              labelText="PASSWORD" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="password"  
              customStyle={{marginBottom:30}}

            />
          </ScrollView>
          </View>
            <View style={styles.nextButton}>
              <NextArrowButton
                handleNextButton={this.handleNextButton}
            />
         </View>
       </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: "#008388"
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
   },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
    nextButton: {
      alignItems: 'flex-end',
      right: 20,
      bottom: 20
    }
  });