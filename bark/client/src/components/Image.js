import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import photos from '../reducers/index'

class Image extends Component {
  static propTypes = {
  photos: PropTypes.shape(
    [{
      url: PropTypes.string,
      breed: PropTypes.string
    }]
  ).isRequired
}
  render(){
    return (
      <div>
        <img src={this.props.photos[0].url} />
      </div>
    )
  }
}



const mapStateToProps = function (state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(Image)
