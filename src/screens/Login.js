import React, {Component} from 'react';
import firebase from 'react-native-firebase';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/buttons/Notification';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAddress: '',
      validPassword: false,
      error: '',
      user: null,
    };
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }

  handleNextButton() {
    if (
      this.state.emailAddress === 'hello@imandy.ie' &&
      this.state.validPassword
    ) {
      alert('sucsess');
      this.setState({formValid: true});
    } else {
      this.setState({formValid: false});
    }
  }

  handleCloseNotification() {
    this.setState({formValid: true});
  }

  handleEmailChange(email) {
    const emailCheckRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({emailAddress: email});

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({validEmail: true});
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({validEmail: false});
      }
    }
  }

  handlePasswordChange(password) {
    if (!this.state.validPassword) {
      if (password.length > 4) {
        this.setState({validPassword: true});
      }
    } else if (password <= 4) {
      this.setState({validPassword: false});
    }
  }

  toggleNextButtonState() {
    const {validEmail, validPassword} = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
    });
  }

  Login = () => {
    this.setState({loadingVisible: true});

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.setState({user});
        this.setState({loadingVisible: false});
        console.log(user);
      })
      .catch(error =>
        this.setState({
          error: error.message,
          formValid: false,
        }),
      );
  };

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    const {formValid} = this.state;
    const showNotification = formValid ? false : true;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;

    return (
      <KeyboardAvoidingView
        style={[{backgroundColor: background}, styles.wrapper]}
        behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              // eslint-disable-next-line react-native/no-inline-styles
              customStyle={{marginBottom: 30}}
              onChangeText={this.handleEmailChange}
              // showCheckmark={email === "hello@imandy.ie"
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              // eslint-disable-next-line react-native/no-inline-styles
              customStyle={{marginBottom: 30}}
              onChangeText={this.handlePasswordChange}
              // showCheckmark={password === "12345"}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              handelPress={this.handleNextButton}
              disable={this.toggleNextButtonState()}
            />
          </View>
          <View
            style={[
              styles.notificationWrapper,
              {marginTop: notificationMarginTop},
            ]}>
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="Those credentials don't look right."
              secondLine="Please try again."
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    zIndex: 999,
  },
});

