/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TestNavigation from './Stacknavigation/Navigation';
const App = () => {
  return (
    // <SafeAreaView style={styles.main}>
    //   <View>
    //     <Text style={{fontSize: 20}}>helooo</Text>
    //   </View>
    // </SafeAreaView>
    <TestNavigation />
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
