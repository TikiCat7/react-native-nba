import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});

const onClick = () => {
  console.log('button pressed');
  Actions.gameDetails();
};

const GamesHomeScreen = () => (
  <Container style={styles.container}>
    <Content>
      <Text>Test Component</Text>
      <Button onPress={onClick}>Game Details</Button>
    </Content>
  </Container>
);

export default GamesHomeScreen;
