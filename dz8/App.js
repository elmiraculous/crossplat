import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './theme/ThemeContext';
import { Text, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  globalText: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: 20,
    color: 'red',
    margin: 50
  },
});

export default App;
