import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SpicaProjectsList} from './spica-components';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.title}>Spica Engine Starters Kits</Text>
        <SpicaProjectsList clicked={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 20,
  },
});

export default App;
