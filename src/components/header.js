import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Header = () => (
   <Text style={styles.header}> Header </Text>
);

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Header;
