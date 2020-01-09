import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default class RoundedButton extends Component {
  render() {
    const { text, icon, textColor, background, handleOnPress } = this.props;
    const backgroundColor = background || 'transparent';
    const color = textColor || colors.black;

    return (
      <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]} onPress={handleOnPress}>
        <View>
          {icon}
           <Text style={[{ color }, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundedButton.ropTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.object,
  handleOnPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    display: "flex",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center"
  },
  ButtonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});