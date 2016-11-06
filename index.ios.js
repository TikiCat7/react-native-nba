import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import Router from './src/Router';

const AppWrapper = () => (
  <Router />
);


AppRegistry.registerComponent('testAppV1', () => AppWrapper);
