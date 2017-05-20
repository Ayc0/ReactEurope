// @flow
import React from 'react';
import { View, Text } from 'react-native';

const ScheduleContent = ({ schedule }: any) => {
  const events = schedule.map((event: any) => (
    <Text key={event.id}>{JSON.stringify(event)}</Text>
  ));
  return (
    <View>
      {events}
    </View>
  );
};

export default ScheduleContent;
