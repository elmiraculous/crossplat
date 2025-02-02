import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppText = ({ style, children, ...props }) => {
  return <Text style={[styles.text, style]} {...props}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 16,
    color: '#333',
    fontWeight: 'normal'
  },
});

export default AppText;
