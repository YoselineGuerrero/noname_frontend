import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

// const users = [...Array(24)].map((_, index) =>
//   // id: faker.datatype.uuid(),
//   // avatarUrl: mockImgAvatar(index + 1),
//   // name: faker.name.findName(),
//   // //email: faker.email.emailAddress(),
//   // //phoneNum: faker.phoneNum.phoneNumber(),
//   // company: faker.company.companyName(),
//   // isVerified: faker.datatype.boolean(),
//   // status: sample(['active', 'banned']),
//   // role: sample([
//   //   'Leader',
//   //   'Hr Manager',
//   //   'UI Designer',
//   //   'UX Designer',
//   //   'UI/UX Designer',
//   //   'Project Manager',
//   //   'Backend Developer',
//   //   'Full Stack Designer',
//   //   'Front End Developer',
//   //   'Full Stack Developer'
//   // ])
// ({
//   id: '1',
//   name: 'Viet',
//   email: 'vc97@gmail.com',
//   phoneNum: '832-776-3923',
//   company: 'MISSO',
//   isVerified: faker.datatype.boolean(),
//   status: sample(['active', 'banned']),
//   role: sample([
//     'Leader',
//     'Hr Manager',
//     'UI Designer',
//     'UX Designer',
//     'UI/UX Designer',
//     'Project Manager',
//     'Backend Developer',
//     'Full Stack Designer',
//     'Front End Developer',
//     'Full Stack Developer'
//   ]),

//   id: '2',
//   name: 'Lavender',
//   email: 'ly97@gmail.com',
//   phoneNum: '832-776-3241',
//   company: 'Violet Inc.',
//   isVerified: faker.datatype.boolean(),
//   status: sample(['active', 'banned']),
//   role: sample([
//     'Leader',
//     'Hr Manager',
//     'UI Designer',
//     'UX Designer',
//     'UI/UX Designer',
//     'Project Manager',
//     'Backend Developer',
//     'Full Stack Designer',
//     'Front End Developer',
//     'Full Stack Developer'
//   ]),

// }));

const users = [
  {
    id: 1,
    name: 'Lavender',
    email: 'ly97@gmail.com',
    phoneNum: '832-776-3241',
    company: 'Violet Inc.',
    isVerified: faker.datatype.boolean(),
    status: sample(['active', 'banned']),
    role: sample([
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer'
    ]),
    creditcard: 'xxxx-xxxx-xxxx-xxxx'
  },
  {
    id: 2,
    name: 'Viet',
    email: 'viet7@gmail.com',
    phoneNum: '832-776-3241',
    company: 'Violet Inc.',
    isVerified: faker.datatype.boolean(),
    status: sample(['active', 'banned']),
    role: sample([
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer'
    ]),
    creditcard: 'xxxx-xxxx-xxxx-xxxx'
  },
  {
    id: 3,
    name: 'Viet',
    email: 'viet7@gmail.com',
    phoneNum: '832-776-3241',
    company: 'Violet Inc.',
    isVerified: faker.datatype.boolean(),
    status: sample(['active', 'banned']),
    role: sample([
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer'
    ]),
    creditcard: 'xxxx-xxxx-xxxx-xxxx'
  },
  {
    id: 4,
    name: 'bassam',
    email: 'viet7@gmail.com',
    phoneNum: '832-776-3241',
    company: 'Violet Inc.',
    isVerified: faker.datatype.boolean(),
    status: 'active',
    role: sample([
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer'
    ])
  },
  {
    id: 5,
    name: 'yoseline',
    email: 'viet7@gmail.com',
    phoneNum: '832-776-3241',
    company: 'Violet Inc.',
    isVerified: faker.datatype.boolean(),
    status: sample(['active', 'banned']),
    role: sample([
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer'
    ])
  }
];

export default users;
