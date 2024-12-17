import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const Button = ({ handlerClick, title, isLoading = false }) => {
  return (
    <TouchableOpacity onPress={handlerClick} style={styles.button} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  handlerClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    backgroundColor: 'rgb(18, 205, 217)',
    borderRadius: 32,
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  text: {
    color: ' rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontSize: 16,
    // fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.12,
    textAlign: 'center',
  },
});
