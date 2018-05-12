import React from 'react';
import * as io from 'socket.io-client';
import axios from 'axios';
import { displayMostRecentUserComment, displayMostRecentAIResponse } from './actions';
import synthVoice from '../config/synthVoice'

// IMPORT STORE BECAUSE STORE HAS THE DISPATCH METHOD
import { store } from './start';

// MAKE SURE THERE'S ONLY ONE SOCKET
let socket;


function getSocket() {
    if (!socket) {
        socket = io.connect();




        // THIS HITS THE SERVER AND LETS US KNOW USER CONNECTED
        socket.on('connect', () => {
            console.log("axios.get connected resp");
        });



        // LISTEN FOR THE CHATMESSAGES EVENT WHICH IS EMITTED BY THE SERVER
        socket.on('zeizaResponse', zeizaResponse => {

            // PUSH ZEIZA'S RESPONSE TO STORE
            store.dispatch(displayMostRecentAIResponse(zeizaResponse));

            // RENDER ZEIZA'S RESPONSE FROM TEXT TO SPEECH
            synthVoice(zeizaResponse);

        });

        socket.on('zeizaCommand', data => {
            var type = data.type;
            var arg = data.col;

            console.log("TYPE: ", type);

            if (type == 'changeBg') {
                document.body.style.background = arg;
            } else if (type == 'changeFontFamily') {
                console.log("changeFontFamily");
                document.querySelector(".zeiza-main-tag").style.fontFamily = arg;
            } else if (type == 'changeFontColor') {
                console.log("changeFontColor");
                document.querySelector(".zeiza-main-tag").style.color = arg;
                document.querySelector(".messages").style.color = arg;
                document.querySelector(".zeiza").style.color = arg;
            } else if (type == 'fadeText') {
                console.log("fadeText");
                document.querySelector(".zeiza-main-tag").style.opacity = "0";
            } else if (type == 'bringBackText') {
                console.log("bringBackText");
                document.querySelector(".zeiza-main-tag").style.opacity = "1";
            } else if (type == 'changeOpacity') {
                console.log("changeOpacity");
                document.querySelector(".zeiza-main-tag").style.opacity = arg;
            } else if (type == 'changePadding') {
                console.log("changePadding", arg + "px");
                document.querySelector(".zeiza-main-tag").style.padding = arg;
                // document.querySelector(".messages").style.padding = arg + "px";
                // document.querySelector(".zeiza").style.padding = arg + "px";
            } else if (type == "resetPadding") {
                console.log("resetPadding");
                document.querySelector(".zeiza-main-tag").style.padding = "0px";
                document.querySelector(".messages").style.padding = "20px 0 0 30px";
                document.querySelector(".zeiza").style.padding = "20px 0 0 30px";
            } else if (type == "space") {
                console.log("space");
                document.body.style.background = "url('http://hdwpro.com/wp-content/uploads/2017/10/Cool-Space-Background.jpg')";
            } else if (type == "hell") {
                console.log("hell");
                document.body.style.background = "url('https://vignette.wikia.nocookie.net/fantendo/images/4/49/Realistic-fire-animated-transparent-gif.gif/revision/latest?cb=20150324012556')";
                document.querySelector(".messages").style.background = "red";
                document.querySelector(".zeiza").style.background = "red";
            }

        });



    }

    return socket;

}





// CREATE SYNTHETIC VOICE FOR ZEIZA
// function synthVoice(text) {
//
//     // CREATE CONTEXT FOR SPEECH SYNTHESIS
//     const synth = window.speechSynthesis;
//     const msg = new SpeechSynthesisUtterance();
//     var voices = synth.getVoices();
//
//     // window.speechSynthesis.onvoiceschanged = function() {
//     //     voices = window.speechSynthesis.getVoices();
//     //     console.log("VOICES: ", voices);
//     // };
//
//     // DEFINE WHAT TEXT ZEIZA WILL BE SPEAKING
//     msg.text = text;
//
//     // CUSTOMIZE ZEIZA'S VOICE
//     msg.voiceURI = 'Native';
//     msg.volume = 1;
//     msg.rate = 1;
//     msg.lang = 'en-IE';
//
//     synth.speak(msg);
// }


export { getSocket as socket } ;
