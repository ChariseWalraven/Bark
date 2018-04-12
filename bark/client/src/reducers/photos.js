import {FETCH_RANDOM_PHOTO} from '../actions/photos'
const photo = 'https://s3-eu-west-1.amazonaws.com/dog-ceo-stanford-files/borzoi/n02090622_6713.jpg'
export default function (state = photo, action) {
  switch(action.type){
    case FETCH_RANDOM_PHOTO:
      return action.payload
    default:
      return state
  }
}
