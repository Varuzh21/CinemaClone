import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreenNav/HomeScreen';
import MovieSingleScreen from '../screens/HomeScreenNav/MovieSingleScreen';
import GameScreen from '../screens/HomeScreenNav/GenreScreen';
import MovieDetailScreen from '../screens/HomeScreenNav/MovieDeatilScreen';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Left} from '../assets/icons';

const Stack = createStackNavigator();

const HomeScreenNav = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="MovieSingle"
        component={MovieSingleScreen}
      />
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          headerTitle: 'Game',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerStyle,
          headerBackTitleStyle: styles.headerBackTitle,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              style={styles.headerLeftTouchable}>
              <Left />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Most Popular Movie',
          headerBackTitleStyle: styles.headerBackTitle,
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerStyle,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerLeftTouchable}>
              <Left />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNav;

const styles = StyleSheet.create({
  headerTitle: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
  headerStyle: {
    backgroundColor: '#1F1D2B',
  },
  btn: {
    width: 32,
    height: 32,
    backgroundColor: 'rgb(37, 40, 54)',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 20,
  },
  headerBackTitle: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
  },
  headerLeftTouchable: {
    width: 32,
    height: 32,
    backgroundColor: 'rgb(37, 40, 54)',
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginLeft: 24,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
