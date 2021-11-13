import { sample } from 'lodash';

const opp = [
  {
    id: 1,
    opportunity: 'Vietname airline',
    name: 'Lavender',
    value: '$2,010',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '1/11/21'
  },
  {
    id: 2,
    opportunity: 'West Airline',
    name: 'Viet',
    value: '$5,000',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '4/15/21'
  },
  {
    id: 3,
    opportunity: 'Guicci',
    name: 'Yoseline',
    value: '$1,500',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '7/28/21'
  },
  {
    id: 4,
    opportunity: 'Dizon',
    name: 'Bassam',
    value: '$5,120',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '8/19/21'
  },
  {
    id: 5,
    opportunity: 'HightTech',
    name: 'Bassam',
    value: '$4,704',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '8/19/21'
  },
  {
    id: 6,
    opportunity: 'Caltech',
    name: 'Yoseline',
    value: '$9,570',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '7/28/21'
  },
  {
    id: 7,
    opportunity: 'North Tech',
    name: 'Bassam',
    value: '$4,700',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '8/19/21'
  },
  {
    id: 8,
    opportunity: 'Home depot',
    name: 'Bassam',
    value: '$6,700',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '8/19/21'
  }
];

export default opp;
