import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

// import Header from './src/components/header';
import Pbp from './src/components/pbp';

const App = () => (
  <Container style={styles.container}>
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
  }
});

AppRegistry.registerComponent('testAppV1', () => App);
