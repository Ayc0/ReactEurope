// @flow
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Navbar from './navbar';
import Schedule from './scheduleWrapper';

const App = TabNavigator(
  {
    schedule: { screen: Schedule },
    speakers: { screen: Schedule },
    ticket: { screen: Schedule },
    userAdd: { screen: Schedule },
    infos: { screen: Schedule },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: Navbar,
  }
);

export default App;
