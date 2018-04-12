import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class Button extends PureComponent {
handleClick(e){
  e.preventDefault()
  alert("Dislike clicked!")
}

  render(){
    return (
        <button
          className="fa fa-thumbs-down dislike-button"
          onClick={this.handleClick}></button>
    )
  }
}

export default Button
