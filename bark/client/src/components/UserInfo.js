import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {

  render(){
    return(
      <div>
      <h2>Your best match:</h2>
      <h2>Username of best match goes here</h2>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserInfo)
