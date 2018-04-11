import React, {PureComponent} from 'react'

class LikeButton extends PureComponent {

LikeUpdate = (val) => {
  console.log(val)
  alert('Update Users likes')
}

  render() {
    return(
      <div>
        <button value="buttonValue" onClick={this.LikeUpdate(this.value)} className= "likebutton" >LIKE</button>
      </div>
    )
  }
}

export default LikeButton
