import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DownloadScreenNav/DownloadScreen';

const Stack = createStackNavigator();
function DownloadScreenNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen  options={{ headerShown: false }} name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
}

export default DownloadScreenNav;
