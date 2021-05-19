import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Loginscreen = ({navigation}) => {
  const gotoRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text style={{fontSize: 20}}>Login screen</Text>
        <Button title="Goto register screen" onPress={() => gotoRegister()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loginscreen;
