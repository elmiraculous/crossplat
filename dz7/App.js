import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Linking from 'expo-linking';
import Navigation from './navigation/Navigation';

export default function App() {
  useEffect(() => {
    const handleDeepLink = (event) => {
      let data = Linking.parse(event.url);
      console.log('Deep link data:', data);
    };

    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  return <Navigation />;
}
