import React from 'react';
import { Text, View } from 'react-native';
import Axios from 'axios';

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

  preparePlaysData() {
    const preped = this.state.plays.map(play => {
      console.log(play.description);
      return (
        <Text key={play.clock + play.description}>
          {play.desription}
        </Text>
      );
    });
    console.log(preped);
    return preped;
  }

  render() {
    const playData = this.state.plays.map(play =>
      <Text key={play.clock + play.description}>
        {play.description}
      </Text>);

    return (
      <View>
        <Text>Play by Play</Text>
        {playData}
      </View>
    );
  }
}

export default Pbp;
