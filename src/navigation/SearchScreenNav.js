import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreenNav/SearchScreen';
import MoveDetailScreen from '../screens/HomeScreenNav/MovieSingleScreen';

const Stack = createStackNavigator();
const SearchScreenNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MoveDetailScreen}
        options={{
          headerTitleStyle: {
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Montserrat',
            fontSize: 16,
          },
          headerTitleAlign: 'center',
          headerTintColor: 'rgb(255, 255, 255)',
          headerStyle: { backgroundColor: 'rgb(31, 29, 43)' },
          headerBackTitleStyle: {
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Montserrat',
            fontSize: 16,
            fontWeight: 600,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default SearchScreenNav;
