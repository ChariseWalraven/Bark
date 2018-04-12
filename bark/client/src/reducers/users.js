import UPDATE_USER from '../actions/user'

const users = [{
    id: 1,
    name: "Peter",
    gender: "male",
    doglikestotal: 10
    // border_collie: 5,
    // dachshund: 2,
    // chihuahua: 2,
    // standard_poodle: 3
  },
  {
    id: 2,
    name: "Paul",
    gender: "male",
    doglikestotal: 9,
    border_collie: 1,
    dachshund: 3,
    standard_poodle: 5
  }]


export default function (state = users, action) {
  switch (action.type) {
    default:
      return state
  }
}

//JBG - this will be the list of dummy data, which can later be entered in the database, once we have it set up and ready to users

// {
//   id: 3,
//   name: "Susan",
//   gender: "female",
//   doglikestotal: 10,
//   border_collie: 6,
//   malamute: 4
// },
// {
//   id: 4,
//   name: "Anna",
//   gender:"female",
//   doglikestotal: 40 ,
//   basset_hound: 10,
//   dachshund:2 ,
//   cardigan_corgi:22 ,
//   standard_poodle:6
// },
// {
//   id: 5,
//   name: "Joyce",
//   gender:"female",
//   doglikestotal: 30 ,
//   border_collie: 10,
//   dachshund:2 ,
//   cardigan_corgi:12 ,
//   standard_poodle:6
// },
// {
//   id: 6,
//   name: "Emma",
//   gender:"female",
//   doglikestotal: 20 ,
//   border_collie: 0,
//   dachshund:2 ,
//   chihuahua:12 ,
//   standard_poodle:6
// },
// {
//   id: 7,
//   name: "Charise",
//   gender:"female",
//   doglikestotal: 10 ,
//   border_collie: 0,
//   dachshund:2 ,
//   labrador:2 ,
//   standard_poodle:6
// },
// {
//   id: 8,
//   name: "Steven",
//   gender:"male",
//   doglikestotal: 20 ,
//   border_collie: 10,
//   dachshund:2 ,
//   basset_hound:2 ,
//   standard_poodle:6
// }]
