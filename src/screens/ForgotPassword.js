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
import NextArrowButton from "../components/buttons/NextArrowButton";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAdress: ""
    };
  }

  handleEmailChange = email => {
    this.setState({ email: email });
  }
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

          <InputField
            customStyle={{ marginTop: 100 }}
            textColor={colors.white}
            labelText="EMAIL ADDRESS"
            labelTextSize={14}
            labelColor={colors.white}
            borderBottomColor={colors.white}
            inputType="email"
            onChangeText={email => this.handleEmailChange(email)}
          />
        </View>

        < NextArrowButton _handelPress_={this.submitEmail} _disabled_={false} /> 
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
