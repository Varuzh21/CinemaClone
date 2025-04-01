import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChange, placeholder, secureText }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.focusedInput,
        ]}
        placeholder={placeholder}
        placeholderTextColor="grey"
        secureTextEntry={secureText}
        value={value}
        onChangeText={onChange}
        accessibilityLabel={label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  secureText: PropTypes.bool,
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    position: 'relative',
    zIndex: 111,
  },
  label: {
    color: 'rgb(235, 235, 239)',
    fontFamily: 'Montserrat Medium',
    fontSize: 12,
    fontWeight: '500',
    position: 'absolute',
    bottom: 45,
    left: 15,
    zIndex: 111,
  },
  input: {
    width: '100%',
    height: 53,
    backgroundColor: 'rgb(31, 29, 43)',
    borderWidth: 1,
    borderColor: 'rgb(37, 40, 54)',
    borderRadius: 24,
    paddingHorizontal: 16,
    color: 'rgb(146, 146, 157)',
    fontFamily: 'Montserrat Medium',
    fontSize: 14,
    fontWeight: '500',
  },
  focusedInput: {
    borderColor: 'rgb(70, 70, 90)',
  },
});
