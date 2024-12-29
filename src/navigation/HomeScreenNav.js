import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreenNav/HomeScreen';
import MovieSingleScreen from '../screens/HomeScreenNav/MovieSingleScreen';
import GameScreen from '../screens/HomeScreenNav/GenreScreen';
import MovieDetailScreen from '../screens/HomeScreenNav/MovieDeatilScreen';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Left, Heart } from '../assets/icons';

const Stack = createStackNavigator();

const HomeScreenNav = () => {
  const navigation = useNavigation();
  const singleMovie = useSelector((state) => state.getSingleMovieReducer.singleMovie) || [];

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieSingle"
        component={MovieSingleScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'transparent' },
          headerTitle: singleMovie.title || 'Movie Details',
          headerTitleStyle: styles.headerTitle,
          headerBackTitleStyle: styles.headerBackTitle,
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerLeftTouchable}
            >
              <Left />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={styles.headerRightTouchable}
            >
              <Heart />
            </TouchableOpacity>
          )
        }}
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
              style={styles.headerLeftTouchable}
            >
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
              style={styles.headerLeftTouchable}
            >
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
  headerBackTitle: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Montserrat',
  },
  headerLeftTouchable: {
    width: 32,
    height: 32,
    backgroundColor: 'rgb(37, 40, 54)',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginLeft: 24,
  },
  headerRightTouchable: {
    width: 32,
    height: 32,
    backgroundColor: 'rgb(37, 40, 54)',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginRight: 24,
  }
});
