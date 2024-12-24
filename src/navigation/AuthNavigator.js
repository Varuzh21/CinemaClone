import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Left } from '../assets/icons/index.js';
import SignInScreen from '../screens/AuthScreenNav/SignInScreen';
import SignInAndSignUpScreen from '../screens/AuthScreenNav/SignInAndSignUpScreen';


const Stack = createStackNavigator();

function AuthNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="SignUp"
          component={SignInAndSignUpScreen}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerTitle: "Login",
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerTitle,
            headerStyle: styles.headerStyle,
            headerBackTitleStyle: styles.headerBackTitle,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerLeftTouchable}
                accessible={true}
                accessibilityLabel="Go Back"
              >
                <Left />
              </TouchableOpacity>
            ),
          }}
        />
    </Stack.Navigator>
  );
}

export default AuthNavigator;

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
