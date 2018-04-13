import React, {PureComponent} from 'react'

class LikeButton extends PureComponent {

LikeUpdate(e) {
  e.preventDefault();
  alert('Update Users likes')
}

  render() {
    return(
      <div>
        <button value="buttonValue" onClick={this.LikeUpdate} className="fa fa-thumbs-up like-button anim" ></button>
      </div>
    )
  }
}

export default LikeButton
