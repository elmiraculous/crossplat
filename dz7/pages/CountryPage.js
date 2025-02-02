import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CountryPage=({ route })=> {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Image source={country.img} style={styles.image} />
      <Text style={styles.title}>{country.name}</Text>
      <Text style={styles.full}>{country.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 300, height: 200, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  full: { fontSize: 16, color: '#333', textAlign: 'center' },
});
export default CountryPage;