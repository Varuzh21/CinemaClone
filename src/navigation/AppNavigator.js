import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import { storage } from '../utils/storage';

function AppNavigator() {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const tokenFromStore = useSelector((state) => state.postUserReducer.userToken);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const storedToken = storage.getString("userToken");
        if (storedToken) {
          setUserToken(storedToken);
        }
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to load token from storage:", error);
      }
    })()
  }, [tokenFromStore]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator;
