import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreenNav/ProfileScreen';
import PrivacyPolicyScreen from '../screens/ProfileScreenNav/PrivacyPolicyScreen';
import {TouchableOpacity} from 'react-native';
import {Left} from '../assets/icons';

const Stack = createStackNavigator();
const ProfileScreenNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
          headerStyle: {backgroundColor: '#1F1D2B'},
          headerBackTitleStyle: {
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Montserrat',
          },
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{
          headerShown: true,
          headerTitleStyle: {
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Montserrat',
            fontSize: 16,
          },
          headerTitle: "Privacy Policy",
          headerTitleAlign: 'center',
          headerTintColor: 'rgb(255, 255, 255)',
          headerStyle: {backgroundColor: '#1F1D2B'},
          headerBackTitleStyle: {
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Montserrat',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={{
                width: 32,
                height: 32,
                backgroundColor: 'rgb(37, 40, 54)',
                opacity: 0.8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                marginLeft: 24,
              }}
            >
              <Left />
          </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreenNav;
