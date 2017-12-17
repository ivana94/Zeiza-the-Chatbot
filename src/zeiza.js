import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { socket } from './socket'
import axios from 'axios';




export default class Zeiza extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidMount() {
    //
    //     // checkHTMLForGetUserMedia();
    //     //
    //     // window.AudioContext = (window.AudioContext || window.webkitAudioContext);
    //     //
    //     // // NAME OF MY AUDIO TAG IN INDEX.HTML
    //     // var player = document.getElementById('player');
    //     //
    //     // // DEFINE ERROR CALLBACK
    //     // var errorCallback = e => {
    //     //     console.log('Error callback.', e);
    //     // };
    //     //
    //     // // STREAM IS WHAT IS RETURNED FROM THE GETMEDIAUSER API
    //     // navigator.mediaDevices.getUserMedia( { audio: true, video: false } ).then(stream => {
    //     //     console.log("I AM THE STREAM: ");
    //     //
    //     //     if (window.URL) {
    //     //         player.src = window.URL.createObjectURL(stream);
    //     //     } else {
    //     //         player.src = stream;
    //     //     }
    //     //
    //     //     // HAVE TO CREATE A NEW AUDIO CONTEXT, SIMILAR TO HOW WE HAVE TO CREATE A CONTEXT
    //     //     // IN ORDER FOR CANVAS TO WORK
    //     //     // THIS AUDIO CONTEXT WILL BE PARENT TO FUTURE AUDIO OBJECTS TO COME
    //     //     // THIS AUDIO CONTEXT INITIALIZES WHEN PAGE LOADS
    //     //     var context = new AudioContext();
    //     //
    //     //     var microphone = context.createMediaStreamSource(stream);
    //     //     var filter = context.createScriptProcessor(1024, 1, 1);
    //     //
    //     //     microphone.connect(filter);
    //     //     filter.connect(context.destination);
    //     //
    //     //     filter.onaudioprocess = e => {
    //     //         console.log(e.inputBuffer);
    //     //
    //     //         socket.emit("userAudio", () => {
    //     //             console.log("inputBuffer in view");
    //     //         });
    //     //
    //     //     }
    //     //
    //     // }, errorCallback);
    //     //
    //     //
    //     //
    //     // // CHECK TO MAKE SURE USER'S BROWSER SUPPORTS GETUSERMEDIA
    //     // function checkHTMLForGetUserMedia() {
    //     //     return !!( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia );
    //     // }
    //     //
    //     // if (checkHTMLForGetUserMedia()) {
    //     //     console.log("user's browser supports getUserMedia.");
    //     // } else {
    //     //     alert('getUserMedia() is not supported in your browser');
    //     // }
    //
    //
    //
    //
    //
    // } // END COMPONENT DID MOUNT










  render() {

    return (
        <div className = "container" >
            Zeiza the chatty bot
        </div>
    )

  }







}



// <button className = "talk-button" onClick={ (e) => this.handleClick() }>Talk to Zeiza</button>
