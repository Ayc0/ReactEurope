// @flow
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Navbar from './navbar';
import Home from './home';

const App = TabNavigator(
  {
    schedule: { screen: Home },
    speakers: { screen: Home },
    ticket: { screen: Home },
    userAdd: { screen: Home },
    infos: { screen: Home },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: Navbar,
  }
);

export default App;
