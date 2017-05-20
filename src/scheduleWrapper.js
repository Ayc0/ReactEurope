// @flow
import React from 'react';
import { TabNavigator } from 'react-navigation';

import ScheduleContent from './scheduleContent';
import schedule from './mock.schedule';

const sortedSchedule = {};

schedule.forEach(event => {
  const date = new Date(event.startDate);
  if (Object.keys(sortedSchedule).includes(date.toDateString())) {
    sortedSchedule[date.toDateString()].push(date);
  } else {
    sortedSchedule[date.toDateString()] = [date];
  }
});

const routeConfigs = {};
const days = Object.keys(sortedSchedule);

const sort = (_date1: string, _date2: string) => {
  const date1: Date = new Date(_date1);
  const date2: Date = new Date(_date2);
  if (date1.getTime() < date2.getTime()) {
    return -1;
  }
  if (date1.getTime() > date2.getTime()) {
    return 1;
  }
  return 0;
};

days.sort(sort);
console.log(days);
days.forEach(date => {
  routeConfigs[date] = {
    screen: props => (
      <ScheduleContent schedule={sortedSchedule[date]} {...props} />
    ),
  };
});

const Schedule = TabNavigator(routeConfigs);

export default Schedule;
