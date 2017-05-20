// @flow
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  tab: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  navbar: {
    flexDirection: 'row',
  },
});

const icons = {
  schedule: 'calendar',
  speakers: 'sound',
  ticket: 'ticket',
  userAdd: 'add-user',
  infos: 'info-with-circle',
};

const Tab = (props: any) => (
  <View style={styles.tab}>
    {props.children}
  </View>
);

const Navbar = (props: any) => {
  const navbar = props.navigation.state.routes.map(route => (
    <Tab key={route.key}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate(route.routeName)}
      >
        <Icon name={icons[route.routeName]} size={36} />
      </TouchableOpacity>
    </Tab>
  ));
  return (
    <View style={styles.tabs}>
      {navbar}
    </View>
  );
};

export default Navbar;
