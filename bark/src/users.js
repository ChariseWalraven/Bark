// users.js

//JBG - this sets up a default export, right? The state will be an empty array as a default, I think.

export default function (state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

//JBG - this will be the list of dummy data, which can later be entered in the database, once we have it set up and ready to users

const users = [
  {
    id: 1,
    name: "Peter",
    gender: "male",
    dog-likes-total: 10,
    dog-likes-breed: {
      border-collie: 5,
      dachshund: 2,
      chihuahua: 2,
      poodle: 3
    }
  },
  {
    id: 2,
    name: "Paul",
    gender: "male",
    dog-likes-total: 9,
    dog-likes-breed: {
      border-collie: 1,
      dachshund: 3,
      poodle: 5
    }
  },
  {
    id: 3,
    name: "Susan",
    gender: "female",
    dog-likes-total: 10,
    dog-likes-breed: {
      border-collie: 6,
      keeshond: 4
    }
  },
  {
    id: 4,
    name: "Anna",
    gender:"female",
    dog-likes-total: 40 ,
    dog-likes-breed: {
      border-collie: 10,
      dachshund:2 ,
      chihuahua:22 ,
      poodle:6
    }
  },
  {
    id: 5,
    name: "Joyce",
    gender:"female",
    dog-likes-total: 30 ,
    dog-likes-breed: {
      border-collie: 10,
      dachshund:2 ,
      chihuahua:12 ,
      poodle:6
    }
  },
  {
      id: 6,
      name: "Anna",
      gender:"female",
      dog-likes-total: 20 ,
      dog-likes-breed: {
        border-collie: 0,
        dachshund:2 ,
        chihuahua:12 ,
        poodle:6
      },
    }
    id: 7,
    name: "Charise",
    gender:"female",
    dog-likes-total: 10 ,
    dog-likes-breed: {
      border-collie: 0,
      dachshund:2 ,
      chihuahua:2 ,
      poodle:6
    }
  },
}
id: 8,
name: "Steven",
gender:"male",
dog-likes-total: 20 ,
dog-likes-breed: {
  border-collie: 10,
  dachshund:2 ,
  chihuahua:2 ,
  poodle:6
}
}
]
