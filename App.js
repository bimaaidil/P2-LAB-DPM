import React from 'react';
import { View, Text } from 'react-native';
import styles from './src/styling';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bima Aidil223510563Tugas2DPM</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

export default App;
