import React from 'react';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import logo from '_assets/images/logo.png';
import {Typography, Colors, Mixins} from '../../styles';

const LoginScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <Image source={logo} style={styles.logo}></Image>
    <Text style={styles.text}>
      ¡Bienvenido a la aplicación por la solidaridad!
    </Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'center',
    width: Mixins.scaleSize(450),
    height: Mixins.scaleSize(200),
  },
  text: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.SECONDARY,
  },
});

export default LoginScreen;
