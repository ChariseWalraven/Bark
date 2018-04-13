import * as request from 'superagent'
import {fetchRandomPhoto} from '../actions/photo'


const baseUrl = 'http://localhost:4000'

export const UPDATE_USER = 'UPDATE_USER'

export const updateUser = (breed) => (dispatch) => {
  request
    .put(`${baseUrl}/users/1`)
    .then(response => fetchRandomPhoto())
    .catch(err => alert(err))
}
//
