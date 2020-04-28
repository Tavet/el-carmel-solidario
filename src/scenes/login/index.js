import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, Image} from 'react-native';
import logo from '_assets/images/logo.png';
const LoginScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>

    <Image source={logo}></Image>
  </SafeAreaView>
);

export default LoginScreen;
