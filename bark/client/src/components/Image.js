import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchRandomPhoto} from '../actions/photo'
import DislikeButton from './Dislike'
import LikeButton from './likeButton'
import './Image.css'
// import photos from '../reducers/index'

class Image extends PureComponent {

handleBreedName(string) {
   return string.split('-').reverse().join(' ')
}

componentWillMount(){
  this.props.fetchRandomPhoto()
}

  render(){
    const {photos} = this.props
    return (
      <div>
        <header className="breed-name"><em>{this.handleBreedName(photos.breed)}</em></header>
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
