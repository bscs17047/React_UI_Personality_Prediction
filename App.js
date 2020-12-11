
import FileUpload from './Screens/FileUpload';
import About from './Screens/About';
import Citation from './Screens/Citation';


import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function HomeScreen() {
  return <FileUpload />;
}

function AboutScreen() {
  return <About />;
}

function CitationScreen() {
  return <Citation />;
}


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
      <Tab.Screen
          name="Citation"
          component={CitationScreen}
          options={{
            tabBarLabel: 'Citation',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}