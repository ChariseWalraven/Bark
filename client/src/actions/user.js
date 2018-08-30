import * as request from 'superagent'


const baseUrl = 'http://localhost:4000'

export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_MATCHES = 'UPDATE_MATCHES'

export const updateUser = (breed) => (dispatch) => {
  request
    .put(`${baseUrl}/users/1`)
    .then(response =>
      console.log(response.body) //logs user that we are currently
    )
    .catch(err => alert(err))
}

export const updateMatches = () => (dispatch) => {
  //get url /match and return response
  request
    .get(`${baseUrl}/match`)
    .then(res => dispatch({
      // console.log('from match url: ',res.body.users[0])
      type: UPDATE_MATCHES,
      payload: res.body.users[0]
    }))
    .catch(err => alert(err))
}

//
