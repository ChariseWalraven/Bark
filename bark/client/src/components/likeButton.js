import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../actions/user'

class LikeButton extends PureComponent {

  likeUpdate = (e) => {
    e.preventDefault();
    this.props.updateUser(this.props.breed);
    alert(`Update Users likes ${this.props.breed}.`)
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

export default connect(mapStateToProps, {updateUser})(LikeButton)
