import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Easing,
  Animated,
} from 'react-native';
import colors from '../../styles/colors';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionValue: new Animated.Value(-80),
    };
    this.closeNotification = this.closeNotification.bind(this);
    this.animatedNotification = this.animatedNotification.bind(this);
  }

  animatedNotification = value => {
    Animated.timing(this.positionValue, {
      toValue: value,
      dutarion: 300,
      velocity: 3,
      tension: 2,
      friction: 8,
      easing: Easing.easeOutBack,
    }).start();
  };

  closeNotification() {
    this.props.handleCloseNotification();
  }
  render() {
    const {type, firstLine, secondLine, showNotification} = this.props;
    showNotification
      ? this.animatedNotification(0)
      : this.animatedNotification(-80);
    // const {positionValue} = this.state;
    return (
      <Animated.View
        style={[
          {transform: [{translateY: this.positionValue}]},
          styles.wrapper,
        ]}>
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
          <Text style={styles.errorMessage}>{secondLine}</Text>
        </View>
        <TouchableOpacity
          style={styles.closeButtom}
          onPress={this.closeNotification}>
          <Icon name="times" size={20} color={colors.lightGray} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  handleCloseNotification: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: 60,
    width: '100%',
    padding: 10,
  },
  notificationContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
  },
  errorMessage: {
    marginBottom: 2,
    fontSize: 14,
  },
  closeButtom: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
