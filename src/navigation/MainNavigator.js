import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenNav from './HomeScreenNav';
import SearchScreenNav from './SearchScreenNav';
import DownloadScreenNav from './DownloadScreenNav';
import ProfileScreenNav from './ProfileScreenNav';

import { Home, Search, Download, Profile } from '../assets/icons/index';
import { HomeActive, SearchActive, DownloadActive, ProfileActive } from '../assets/icons/active/index'

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1F1D2B',
          borderTopWidth: 0,
          height: 72,
          paddingHorizontal: 45,
          paddingTop: 16,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              {focused ? <HomeActive width={18} height={18} /> : <Home width={18} height={18} />}
              {focused ? (
                <Text style={[styles.labelText, focused && styles.activeText]}>Home</Text>
              ) : null}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreenNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              {focused ? <SearchActive width={18} height={18} /> : <Search width={18} height={18} />}
              {focused ? (
                <Text style={[styles.labelText, focused && styles.activeText]}>Search</Text>
              ) : null}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Download"
        component={DownloadScreenNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              {focused ? <DownloadActive width={18} height={18} /> : <Download width={18} height={18} />}
              {focused ? (
                <Text style={[styles.labelText, focused && styles.activeText]}>Download</Text>
              ) : null}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreenNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              {focused ? <ProfileActive width={18} height={18} /> : <Profile width={18} height={18} />}
              {focused ? (
                <Text style={[styles.labelText, focused && styles.activeText]}>Profile</Text>
              ) : null}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  labelText: {
    color: '#8E8E93',
    fontSize: 12,
  },
  activeTab: {
    width: 115,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#2C2A3A',
  },
  activeText: {
    color: 'rgb(18, 205, 217)',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: 500
  },
});
