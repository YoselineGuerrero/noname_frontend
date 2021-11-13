import { sample } from 'lodash';

const opp = [
    {
      id: 1,
      opportunity: 'opportunity',
      name: 'Lavender',
      value: '$2,000',
      status: sample(['in progress', 'waitlist', 'closed']),
      activity: '1/11/21',
    },
    {
        id: 2,
        opportunity: 'opportunity',
        name: 'Viet',
        value: '$5,000',
        status: sample(['in progress', 'waitlist', 'closed']),
        activity: '4/15/21',
    },
    {   
        id: 3,
        opportunity: 'opportunity',
        name: 'Yoseline',
        value: '$1,500',
        status: sample(['in progress', 'waitlist', 'closed']),
        activity: '7/28/21',
    },
    {
        id: 4,
        opportunity: 'opportunity',
        name: 'Bassam',
        value: '$4,700',
        status: sample(['in progress', 'waitlist', 'closed']),
        activity: '8/19/21',
    }
    ]

    export default opp;