import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function TabNavigation() {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home-outline" size={24}  color={"teal"} />
            )
        }}
      />
      <Tab.Screen name="Search" component={Search} 
        options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="search-outline" size={24}  color={"teal"} />
            )
        }}
      />
      <Tab.Screen name="Fav" component={Fav} 
         options={{
            tabBarLabel: 'Fav',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart-outline" size={24} color={"teal"} />
            )
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
         options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user-o" size={24} color={"teal"} />
            )
        }}
      />
    </Tab.Navigator>
  )
}