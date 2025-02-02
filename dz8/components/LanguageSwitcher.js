import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); 
  };

  return (
    <View style={styles.container}>
      <Text>{i18n.t('taskTitle')}</Text> 
      <Button title={i18n.t('addButton')} onPress={() => handleLanguageChange('ru')} />
      <Button title={i18n.t('addButton')} onPress={() => handleLanguageChange('en')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LanguageSwitcher;
