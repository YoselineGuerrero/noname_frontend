import { sample } from 'lodash';

const opp = [
  {
    id: 1,
    opportunity: 'opportunity 1',
    name: 'Lavender',
    value: '$2,000',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '1/11/21'
  },
  {
    id: 2,
    opportunity: 'opportunity 2 ',
    name: 'Viet',
    value: '$5,000',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '4/15/21'
  },
  {
    id: 3,
    opportunity: 'opportunity 3',
    name: 'Yoseline',
    value: '$1,500',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '7/28/21'
  },
  {
    id: 4,
    opportunity: 'opportunity 4',
    name: 'Bassam',
    value: '$4,700',
    status: sample(['in progress', 'waitlist', 'closed']),
    activity: '8/19/21'
  }
];

export default opp;
