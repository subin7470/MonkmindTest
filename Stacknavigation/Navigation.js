import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Loginscreen from '../Screens/Login';
import RegisterScreen from '../Screens/Register';
const Stack = createStackNavigator();
const TestNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default TestNavigation;
