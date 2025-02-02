import React, { useState, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './theme/ThemeContext';
import { ActivityIndicator, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import * as Font from 'expo-font';
import * as Localization from 'expo-localization';

import en from './assets/i18n/en.json';
import ru from './assets/i18n/ru.json';
import { initReactI18next } from 'react-i18next';

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [isTranslationLoaded, setIsTranslationLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'GreatVibes-Regular': require('./assets/fonts/GreatVibes-Regular.ttf'),
    }).then(() => setIsFontLoaded(true));

    i18n
      .use(initReactI18next)
      .init({
        lng: Localization.locale.split('-')[0], 
        resources: {
          en: en,
          ru: ru,
        },
      })
      .then(() => setIsTranslationLoaded(true));
  }, []);

  if (!isFontLoaded || !isTranslationLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
