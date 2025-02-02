import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';

import HomePage from '../pages/HomePage';
import CountryPage from '../pages/CountryPage';
import CountryGalleryPage from '../pages/CountryGaeryPage';

const Stack = createStackNavigator();

const linking = {
  prefixes: [Linking.createURL('/')], 
  config: {
    screens: {
      Home: 'home',
      Details: 'details/:id',
      Gallery: 'details',
    },
  },
};
  
const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Главная' }} />
        <Stack.Screen name="Details" component={CountryPage} options={{ title: 'Детали' }} />
        <Stack.Screen name="Gallery" component={CountryGalleryPage} options={{ title: 'Галерея' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
