import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchRandomPhoto} from '../actions/photo'
import './Image.css'
// import photos from '../reducers/index'

class Image extends PureComponent {

handleBreedName() {
  return this.props.photos[0].breed
          .split('-')
            .reverse()
              .join(' ')
}

componentWillMount(){
  this.props.fetchRandomPhoto()
}

  render(){
    const {photos} = this.props
    return (
      <div>
        <header><em>Filler text</em></header>
        <img src={this.props.photos} alt="dog"/>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    photos: state.photos.message
  }
}

export default connect(mapStateToProps, {fetchRandomPhoto})(Image)
