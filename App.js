import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from './src/screens/DetailsScreen';
import MainPage from './src/screens/MainPage';



const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName='MainPage' headerMode={'none'} >
    <Stack.Screen name='MainPage' component={MainPage}  />
    <Stack.Screen name='DetailsPage' component={DetailsScreen}  />

    </Stack.Navigator>
    </NavigationContainer>
  );
}


