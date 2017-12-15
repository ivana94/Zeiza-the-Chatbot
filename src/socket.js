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


        // LISTENS FOR USER JOIN -- THIS WILL RUN WHENEVER A USER LOGS IN
        socket.on('userJoined', (userWhoJoined) => {
            store.dispatch(userJoined(userWhoJoined));
        });


        // TAKE LIST OF ONLINE USERS AND PUSH TO STATE
        socket.on('onlineUsers', (onlineUsers) => {
            store.dispatch(listOfOnlineUsers(onlineUsers));
        });


        // THIS LISTENS ON THE USERLEFT EVENT
        socket.on("userLeft", (userWhoLeft) => {
            store.dispatch(userLeft(userWhoLeft));
        });


        // LISTEN FOR THE CHATMESSAGES EVENT WHICH IS EMITTED BY THE SERVER
        socket.on("chatMessages", (chats) => {
            store.dispatch(displayMessages(chats));
        });



    }

    return socket;

}


export { getSocket as socket } ;
