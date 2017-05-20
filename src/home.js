// @flow
import React from 'react';
import { Text } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

export default Home;
