import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'


class UserInfo extends PureComponent {

  render(){
    const {users} = this.props
    // console.log(users[0].id)
    return(
      <div>
      <h2>Your best match: <span className="match">{users.name}</span></h2>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserInfo)
