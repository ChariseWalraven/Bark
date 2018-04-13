import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {updateUser, updateMatches} from '../actions/user'
import {fetchRandomPhoto} from '../actions/photo'

class LikeButton extends PureComponent {

  likeUpdate = (e) => {
    e.preventDefault();
    this.props.updateUser(this.props.breed);
    this.props.fetchRandomPhoto()
    this.props.updateMatches();
    // console.log(this.props.breed);
  }

  render() {
    return(
      <div>

        <button value="buttonValue" onClick={this.likeUpdate} className="fa fa-thumbs-up like-button anim" ></button>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    breed: state.photos.breed
  }
}

export default connect(mapStateToProps, {updateUser, updateMatches, fetchRandomPhoto})(LikeButton)
