import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Thumbnail, Card, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

// import Header from './src/components/header';
import Pbp from './src/components/pbp';

const App = () => (
  <Container>
    <Header>
      <Button transparent>
        <Icon name='ios-arrow-back' />
      </Button>

      <Title>NBA JS DEMO!</Title>

      <Button transparent>
        <Icon name='ios-menu' />
      </Button>
    </Header>

    <Content>
      <Text>JR SMITH IS THE BEST</Text>
      <Pbp />
      
    </Content>

  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testAppV1', () => App);
