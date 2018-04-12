import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchRandomPhoto} from '../actions/photo'


class Button extends PureComponent {
  handleClick = (e) => {
    e.preventDefault()
    this.props.fetchRandomPhoto()
  }

  render(){
    const {photos} = this.props
    return (
        <button className="fa fa-thumbs-down dislike-button" onClick={e => this.handleClick(e)}></button>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, {fetchRandomPhoto})(Button)
