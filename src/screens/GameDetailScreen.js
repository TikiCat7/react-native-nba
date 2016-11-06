import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';
import Pbp from '../../src/components/pbp';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});

const GameDetailScreen = () => (
  <Container style={styles.container}>
    <Content>
      <Pbp />
    </Content>
  </Container>
);

export default GameDetailScreen;
