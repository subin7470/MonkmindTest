import React from 'react';

import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import ComingSoon from './assets/coming_soon.jpeg';
const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        style={styles.backgroundImage}
        source={ComingSoon}></ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1},
  backgroundImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
});
export default Home;
