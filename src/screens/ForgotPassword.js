import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import colors from "../styles/colors";
import InputField from '../components/InputField';
import RoundedButton from "../components/buttons/RoundedButton";

export default class ForgotPassword extends Component {
  render() {
    const { background } = this.props;
    return (
      <KeyboardAvoidingView
        style={[{backgroundColor: background}, styles.wrapper]}
        behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <Text style={styles.ForgotPasswordHeading}>
            Forgot your password?
          </Text>
          <Text style={styles.ForgotPasswordSubHeading}>
            Enter your email to find your account.
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01,
  },
  scrollViewWrapper: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  ForgotPasswordHeading: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
  },
  ForgotPasswordSubHeading: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 15,
  },
});
