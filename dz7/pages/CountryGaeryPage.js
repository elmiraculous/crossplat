import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';

const CountryGaeryPage =()=> {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Галерея стран</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/islandia.jpg')} style={styles.image} />
        <Text style={styles.caption}>Исландия</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/islandia.jpg')} style={styles.image} />
        <Text style={styles.caption}>Греция</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/islandia.jpg')} style={styles.image} />
        <Text style={styles.caption}>Сингапур</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/islandia.jpg')} style={styles.image} />
        <Text style={styles.caption}>Сингапур</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  imageContainer: { alignItems: 'center', marginBottom: 20 },
  image: { width: 300, height: 200, borderRadius: 10 },
  caption: { fontSize: 16, marginTop: 10 },
});
export default CountryGaeryPage;