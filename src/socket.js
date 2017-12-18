import React from 'react';
import * as io from 'socket.io-client';
import axios from 'axios';

// IMPORT STORE BECAUSE STORE HAS THE DISPATCH METHOD
import { store } from './start';

// MAKE SURE THERE'S ONLY ONE SOCKET
let socket;


function getSocket() {
    if (!socket) {
        socket = io.connect();




        // THIS HITS THE SERVER AND LETS US KNOW USER CONNECTED
        socket.on('connect', () => {
            axios.get('/connected/' + socket.id).then(resp => {
                console.log("axios.get connected resp", resp);
            });
        });

        function synthVoice(text) {
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance();
            utterance.text = text;
            synth.speak(utterance);
        }


        // LISTEN FOR THE CHATMESSAGES EVENT WHICH IS EMITTED BY THE SERVER
        socket.on('zeizaResponse', zeizaResposne => {
            synthVoice(zeizaResposne);
        });



    }

    return socket;

}


export { getSocket as socket } ;
