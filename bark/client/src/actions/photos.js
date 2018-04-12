import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCH_RANDOM_PHOTO = 'FETCH_RANDOM_PHOTO'
export const FETCH_BREED_PHOTO = 'FETCH_BREED_PHOTO'

export const fetchRandomPhoto = () => (dispatch) => {
  request
    .get(`${baseUrl}/`)
    .then(response => dispatch({
      type: FETCH_RANDOM_PHOTO,
      payload: response.body
    }))
    .catch(err => alert(err))
}
