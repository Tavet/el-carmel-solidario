import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import logo from '_assets/images/logo.png';
import {Typography, Colors, Mixins, Spacing} from '../../styles';
import _ from 'lodash';

import t from 'tcomb-form-native';

const LoginScreen = ({navigation}) => {
  const Form = t.form.Form;

  const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
  stylesheet.formGroup.normal.paddingTop = 10;
  stylesheet.textbox.normal.color = Colors.SECONDARY;
  stylesheet.textbox.normal.fontFamily = Typography.FONT_FAMILY_REGULAR;
  stylesheet.textbox.normal.borderRadius = 30;
  stylesheet.textbox.normal.backgroundColor = '#EEE';
  stylesheet.controlLabel.normal.color = Colors.SECONDARY;
  stylesheet.controlLabel.normal.fontFamily = Typography.FONT_FAMILY_BOLD;
  stylesheet.controlLabel.normal.alignSelf = 'center';

  const User = t.struct({
    casa: t.Number,
    identificacion: t.Number,
  });

  this.state = {
    value: {
      casa: '',
      identificacion: '',
    },
  };

  const options = {
    fields: {
      casa: {
        label: 'Número de casa',
        error: 'Debes escribir el número de tu casa. Ejemplo: 184',
        stylesheet: stylesheet,
      },
      identificacion: {
        label: 'Número de identificación',
        error:
          'Debes escribir el numero de identificación adscrito a tu casa: Ejemplo: 1020496240',
        stylesheet: stylesheet,
      },
    },
  };

  onPress = () => {
    console.log('presionando');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.text}>
        ¡Bienvenido a la aplicación por la solidaridad!
      </Text>
      <Form type={User} options={options} value={this.state.value} />
      <TouchableHighlight style={styles.button} onPress={this.onPress}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

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
    height: Mixins.scaleSize(150),
  },
  text: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.SECONDARY,
    paddingBottom: 20,
  },
  form: {
    paddingTop: 25,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  buttonText: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    width: Mixins.scaleSize(130),
    height: 36,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 30,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
