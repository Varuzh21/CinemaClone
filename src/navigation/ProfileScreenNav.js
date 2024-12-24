import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreenNav/ProfileScreen';

const Stack = createStackNavigator();
const ProfileScreenNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTitleStyle: {
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Montserrat',
            fontSize: 16,
          },
          headerTitleAlign: 'center',
          headerTintColor: 'rgb(255, 255, 255)',
          headerStyle: { backgroundColor: '#1F1D2B' },
          headerBackTitleStyle: {
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Montserrat',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileScreenNav;
