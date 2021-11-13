import { sample } from 'lodash';

const opp = [
    {
      id: 1,
      opportunity: 'opportunity',
      name: 'Lavender',
      value: '$2,000',
      status: sample(['in progress', 'waitlist']),
      activity: '1/11/21',
    },
    {
    id: 1,
    opportunity: 'opportunity',
    name: 'Viet',
    value: '$5,000',
    status: sample(['in progress', 'waitlist']),
    activity: '4/15/21',
    }
    ]

    export default opp;