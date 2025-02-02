import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import {ThemeProvider} from './theme/ThemeContext';
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
