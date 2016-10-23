import React from 'react';
import { CardItem } from 'native-base';
import { Text, View, Image } from 'react-native';

const PbpCard = ({ play, thumbnailUri }) => {
  const { description } = play;
  return (
      <CardItem style={styles.CardItem}>
        <View>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnailUri }}
          />
        </View>
        <View>
          <Text style={styles.CardText}>
            {description}
          </Text>
        </View>
      </CardItem>
  );
};

const styles = {
  CardItem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  CardText: {
    fontSize: 8
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  }

};

export default PbpCard
