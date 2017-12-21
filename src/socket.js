import React from 'react';
import * as io from 'socket.io-client';
import axios from 'axios';
import { displayMostRecentUserComment, displayMostRecentAIResponse } from './actions';

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

            if (type == 'changeBg') {
                document.body.style.background = arg;
            } else if (type == 'changeFontFamily') {
                document.querySelector(".zeiza-main-tag").style.fontFamily = arg;
            } else if (type == 'changeFontColor') {
                console.log("arg in here :", arg);
                document.querySelector(".zeiza-main-tag").style.color = arg;
                document.querySelector(".messages").style.color = arg;
                document.querySelector(".zeiza").style.color = arg;
            } else if (type == 'fadeText') {
                document.querySelector(".zeiza-main-tag").style.opacity = "0";
            } else if (type == 'bringBackText') {
                document.querySelector(".zeiza-main-tag").style.opacity = "1";
            } else if (type == 'changeOpacity') {
                document.querySelector(".zeiza-main-tag").style.opacity = arg;
            }

        });



    }

    return socket;

}





// CREATE SYNTHETIC VOICE FOR ZEIZA
function synthVoice(text) {

    // CREATE CONTEXT FOR SPEECH SYNTHESIS
    const synth = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance();

    console.log(window.speechSynthesis.getVoices());
    // var voices = synth.getVoices();

    // window.speechSynthesis.onvoiceschanged = function() {
    //     voices = window.speechSynthesis.getVoices();
    //     console.log("VOICES: ", voices);
    // };

    // DEFINE WHAT TEXT ZEIZA WILL BE SPEAKING
    msg.text = text;

    // CUSTOMIZE ZEIZA'S VOICE
    msg.voiceURI = 'Native';
    msg.volume = 1;
    msg.rate = 1;
    msg.lang = 'en-IE';

    synth.speak(msg);
}


export { getSocket as socket } ;
