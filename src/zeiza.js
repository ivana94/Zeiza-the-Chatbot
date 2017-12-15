import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';




export default class Default extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      checkHTMLForGetUserMedia();



      function checkHTMLForGetUserMedia() {
          return !!(
              navigator.getUserMedia || navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia || navigator.msGetUserMedia
                );
            }
  }


  render() {

    return (
        <div className = "container" >

        </div>
    )

  }
}
