import React from 'react';
import { CardItem } from 'native-base';
import { Text, View, Image } from 'react-native';

const PbpCard = ({ play, thumbnailUri }) => {
  const { description, clock, vTeamScore, hTeamScore } = play;
  return (
      <CardItem style={styles.CardItem}>
        <View style={styles.ThumbnailViewStyle}>
          <Image
            style={styles.ThumbnailStyle}
            source={{ uri: thumbnailUri }}
          />
        </View>

        <Text style={styles.CardText}>
          {description}
        </Text>

        <View style={styles.ScoreAndTimeStyle}>
          <Text>
            {hTeamScore}-{vTeamScore}
          </Text>
          <Text style={styles.CardClock}>
            {clock}
          </Text>
        </View>

      </CardItem>
  );
};

const styles = {
  CardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CardText: {
    fontSize: 12,
    flexWrap: 'wrap',
    flex: 1
  },
  CardClock: {
    fontWeight: '300'
  },
  ThumbnailStyle: {
    width: 50,
    height: 50,
  },
  ThumbnailViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  ScoreAndTimeStyle: {
    alignItems: 'center',
    marginLeft: 5
  }
};

export default PbpCard;
