import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { socket } from './socket'
import axios from 'axios';




export default class RecordButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {

      return (
        <div className = "container" >

            <button className="RecordButton" onClick = { this.props.handleClick } >Talk to Zeiza</button>

        </div>
      )

    }

}
