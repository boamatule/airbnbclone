import React, { Component }  from 'react';
import { PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import colors from '../../styles/colors';

export default class NextArrowButton extends Component {
  render() {
    const { disabled, handlePress } = this.props;
     // console.log()
    const opacityStyle = disabled ? { backgroundColor: 'rgba(255, 255, 255,0.2)'} : { backgroundColor: 'rgba(255, 255, 255,0.6)'}
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          onPress={handlePress}
          style={[opacityStyle, styles.button]}>
          <Icon 
            name="angle-right"
            color={colors.green01}
            size={32}
            style={StyleSheet.icon}
            disabled={disabled}
            />
        </TouchableHighlight>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};


const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20,
    paddingTop: 20
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: colors.white
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
})