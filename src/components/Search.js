import React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Search as SearchIcon, Filter } from '../assets/icons';

const Search = ({onNavigate}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SearchIcon width={20} height={20} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search a title.."
        placeholderTextColor="rgb(146, 146, 157)"
      />
      <TouchableOpacity style={styles.iconFilterContainer} onPress={onNavigate}>
        <Filter width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 41,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(37, 40, 54)',
    borderRadius: 24,
    paddingHorizontal: 16,
  },
  iconContainer: {
    paddingHorizontal: 5,
  },
  iconFilterContainer: {
    paddingLeft: 10,
    paddingRight: 5,
    borderLeftWidth: 1,
    borderColor: '#696974',
  },
  input: {
    flex: 1,
    color: 'rgb(146, 146, 157)',
    fontFamily: 'Montserrat',
    fontSize: 14,
    // fontWeight: '500',
  },
});
