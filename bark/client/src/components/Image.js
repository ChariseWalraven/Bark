import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchRandomPhoto} from '../actions/photo'
import './Image.css'
// import photos from '../reducers/index'

class Image extends PureComponent {

// handleBreedName() {
//    photos.breed.split('-')
// }

componentWillMount(){
  this.props.fetchRandomPhoto()
}

  render(){
    const {photos} = this.props
console.log(typeof photos.breed)
    return (
      <div>
        <header><em>{photos.breed}</em></header>
        <img src={photos.message} alt="dog"/>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, {fetchRandomPhoto})(Image)
