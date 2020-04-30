import * as React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Navigator from '_navigations';
import {name as appName} from './app.json';
import {Colors} from '_styles';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    accent: 'yellow',
  },
};

export default Main = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
