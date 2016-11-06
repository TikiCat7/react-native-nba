import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import GameDetailScreen from './screens/GameDetailScreen';
import GamesHomeScreen from './screens/GamesHomeScreen';

 const RouterComponent = () => (
     <Router sceneStyle={{ paddingTop: 65 }}>
       <Scene key='gameDetails' component={GameDetailScreen} title="Game Detail Screen Example" />
       <Scene key='gamesMain' component={GamesHomeScreen} title="Games Main Screen" initial />
     </Router>
);

 export default RouterComponent;
