/*
* File: App.js
* Author: Varga Lilla
* Copyright: 2025, Varga Lilla
* Group: Szoft II/1/N
* Date: 2025-02-02
* Github: https://github.com/Lilla624/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [surfaceArea, setSurfaceArea] = useState('');

  function startCalc() {
    const r = Number(radius), h = Number(height);
    setSurfaceArea(isNaN(r) || isNaN(h) ? "Hibás bemenet!" : (2 * Math.PI * r * (r + h)).toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Henger felszínének számítása</Text>

      <Text>Sugár (r):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={radius => setRadius(radius)}
        value={radius}
      />

      <Text>Magasság (h):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={height => setHeight(height)}
        value={height}
      />

      <TouchableOpacity style={styles.button} onPress={startCalc}>
        <Text style={styles.buttonText}>Számítás</Text>
      </TouchableOpacity>

      <Text>Felszín:</Text>
      <TextInput
        style={styles.input}
        value={surfaceArea}
        editable={false}
      />

      <Image 
        source={require('./assets/henger.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    margin: 30,
    backgroundColor: 'aliceblue',
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'monospace',
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: 'royalblue',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'grey',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 3,
  },
  input: {
    fontFamily: 'monospace',
    fontSize: 27,
    textAlign: 'center',
    width: 300,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'grey',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 10,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'darkgreen',
    borderWidth: 3,
    fontSize: 25,
    fontFamily: 'monospace',
    marginBottom: 20,
  },
  image: {
    width: 330,
    height: 330,
    marginBottom: 10,
  },
});