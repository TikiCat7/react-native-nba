import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'native-base';
import Axios from 'axios';

import PbpCard from './pbpCard';

class Pbp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plays: []
    };
  }

  componentWillMount() {
    console.log('hey 123');
    Axios.get('https://data.nba.net/data/10s/prod/v1/20161021/0011600096_pbp_4.json')
    .then(res => this.setState({ plays: res.data.plays }))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    console.log('component mounteds');
    console.log(this.state.plays);
  }

  render() {
    const playData = this.state.plays.map(play => {
      const teamId = play.teamId;
      let uri = '';
      if (teamId === '1610612764') {
        uri = 'https://lh3.googleusercontent.com/Se_JaoTyEUh4xvVu9CYfgfmjb573H6u2OrhVlJZCwi2E8R612M0K3iRIVfM4-6YoQb4THqkkGtWJV9DN2Mgpc8YRjevuHthvUUyejPYGT45Je6RTnj7Tn8a5h3qp_JTvfB9sj98';
      } else if (teamId === '1610612761') {
        uri = 'https://www.ticketsmofo.com/uploads/media/54d0d5e40628b.png?v2';
      } else {
        uri = 'https://diylogodesigns.com/blog/wp-content/uploads/2016/06/nba-logo-transparent-png-logo-download.png';
      }
        return (
          <PbpCard
            play={play}
            key={play.clock + play.description}
            thumbnailUri={uri}
          />
        );
      }
    );

    return (
      <View style={styles.PbpViewStyle} >
        <Text style={styles.titleStyle}>Play By Play Data for TOR vs WAS 4Q (2016/10/21) </Text>
        <Card style={styles.CardStyle}>
          { playData }
        </Card>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  CardStyle: {
    width: 320
  },
  PbpViewStyle: {
    alignItems: 'center'
  }
};

export default Pbp;
