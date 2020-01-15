import React, { Component } from "react";
import firebase from "react-native-firebase";
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

  constructor() {
    super();

    this.state = {
      user: null,
      email: "",
      password: "",
      formValid: true,
      error: ""
    }
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged( user => {
      this.setState({ user });
    })
  }

  Login = () => {
    this.setState({ loadingVisible: true });


    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.setState({ user });
        this.setState({ loadingVisible: false });
      })
      .catch(error => 
       this.setState({
         error: error.message,
         formValid: false
       })
    );
  };

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  handleEmailChange = email => {
    this.setState({ email: email });
  };
  handlePasswordChange = password => {
    this.setState({ password: password });
  }
  static navigationOptions = {
    header: null
  };

  render() {
    const { formValid, loadingVisible } = this.state;

    return (
      <KeyboardAvoidingView style={[styles.avoidView, styles.wrapper]}  behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField 
              labelText="EMAIL ADDRESS" 
              onChangeText={this.handleEmailChange}
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.orange} 
              borderBottomColor={colors.white} 
              inputType="email" 
              customStyle={{marginBottom:30}} 
              // showCheckmark={email === "test@gmail.com"}
                
            />
            <InputField 
              labelText="PASSWORD" 
              onChangeText={this.handlePasswordChange}
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="password"  
              customStyle={{marginBottom:30}}
              // showCheckmark={password === "12345"}

            />
            
          </ScrollView>
          </View>
            <View style={styles.nextButton}>
              <NextArrowButton
                handlePress={this.Login}
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