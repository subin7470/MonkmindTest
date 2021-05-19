import React, {useState} from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {alerter, postData} from '../api';
import bg from './assets/background.jpg';
import logo from './assets/logo.jpeg';
const Loginscreen = ({navigation}) => {
  const [fields, setFields] = useState([
    {
      name: 'username',
      value: '',
      type: 'username',
    },
    {
      name: 'password',
      value: '',
      type: 'password',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const gotoRegister = () => {
    navigation.navigate('Register');
  };
  const handleLogin = async () => {
    let params = {
      email: fields.find(field => field.name === 'username')?.value,
      password: fields.find(field => field.name === 'password')?.value,
    };
    console.log(params);
    if (!params.email || !params.password) {
      alerter('Required Fields Missing', 'Please fill all mandatory fields');
      return;
    }
    setLoading(true);
    let response = await postData('/login-user', params);
    setLoading(false);
    if (response) {
      console.log(response);
      navigation.navigate('Home');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      {loading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="#000000"
        />
      )}
      <ImageBackground
        source={bg}
        style={styles.backgroundImage}></ImageBackground>
      <View style={styles.grayWrapper}>
        <View style={styles.form}>
          <View style={styles.logoWrapper}>
            <Image source={logo} style={styles.logo} />
          </View>
          {fields.map((field, i) => (
            <TextInput
              style={styles.input}
              key={i}
              onChangeText={value => {
                let prevState = [...fields];
                prevState[i].value = value;
                setFields(prevState);
              }}
              placeholder={field.name}
              value={field.value}
              // autoCompleteType={field.type}
              secureTextEntry={field.type === 'password' ? true : false}
            />
          ))}
          <TouchableOpacity
            title="Sign In"
            style={styles.button}
            onPress={() => handleLogin()}>
            <Text style={{fontSize: 20, color: '#ffffff'}}>Sign In</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 10,
              height: 40,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#8c96d7', marginRight: 5}}>
              Don't you have an account?
            </Text>
            <TouchableOpacity
              title="Sign In"
              // style={styles.button}
              onPress={() => gotoRegister()}>
              <Text
                style={{fontSize: 20, color: '#0275d8', fontWeight: 'bold'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0.5,
    borderColor: '#989898',
    borderRadius: 20,
    padding: 10,
  },
  backgroundImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  grayWrapper: {
    height: '50%',
    backgroundColor: '#989898',
    padding: 20,
  },
  form: {
    height: 400,
    marginTop: -100,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'black',
    padding: 20,
  },
  logoWrapper: {
    // flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 100,
  },
  logo: {
    height: 70,
    width: 100,
    // flex: 1,
    alignSelf: 'center',
  },
  button: {
    height: 50,
    borderWidth: 0.5,
    padding: 10,
    backgroundColor: '#28a745',
    borderColor: '#28a745',
    // flex: 1,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: 'rgba(121, 210, 209, 0.498);',
  },
});

export default Loginscreen;
