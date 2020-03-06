import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';
import { PropTypes} from 'prop-types';
import colors from '../styles/colors';

export default class Loader extends Component {
  render() {
    const { animationType, modalVisible } = this.props;
    return (
      <Modal animationType={animationType} transparent={true} visible={modalVisible}>
        <View style={styles.wrapper}>
        <Image
            style={styles.loaderContainer}
            source={require('../img/loader.gif')}
          />
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  loaderContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    width: '90',
    height: '90',
    left: '50%',
    top: '50%',
    marginLeft: -45,
    marginTop: -45,
  },
});
