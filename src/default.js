import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';




export default class Default extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    const { first, last, bio, email, showBioUpdate } = this.props

    return (
        <div className = "container" >
            <h2 className = "default-welcome">Welcome, {first}</h2>
            <span className = "default-link-1" id = "link"><Link to ="/profile">profile</Link></span>
            <span className = "default-link-2" id = "link"><Link to ="/online-users">online users</Link></span>
            <span className = "default-link-3" id = "link"><Link to ="/friends">friends</Link></span>
            <span className = "default-link-4" id = "link"><Link to ="/chat">chat</Link></span>
        </div>
    )

  }
}
