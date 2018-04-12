import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCH_RANDOM_PHOTO = 'FETCH_RANDOM_PHOTO'
export const FETCH_BREED_NAME = 'FETCH_BREED_NAME'

export const fetchRandomPhoto = () => (dispatch) => {
  request
    .get(`${baseUrl}/`)
    .then(response => dispatch({
      type: FETCH_RANDOM_PHOTO,
      payload: JSON.parse(response.text)
    }))
  // console.log(JSON.parse(response.text))))
    .catch(err => alert(err))
}

export const fetchBreedName = () => (dispatch) => {
  console.log('connected!')
  request
  .get(`${baseUrl}/`)

}
