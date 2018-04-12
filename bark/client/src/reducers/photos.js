const photos = [{
  url:'https://s3-eu-west-1.amazonaws.com/dog-ceo-stanford-files/deerhound-scottish/n02092002_8952.jpg',
  breed: 'deerhound-scottish'
}]

export default function (state = photos, action) {
  switch(action.type){
    default:
      return state
  }
}
