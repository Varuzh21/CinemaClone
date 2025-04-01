import { StyleSheet, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
function Wrapper(props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: width * 0.06,
    backgroundColor: 'rgb(31, 29, 43)',
  },
});

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
