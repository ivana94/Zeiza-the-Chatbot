import React from 'react';
import axios from 'axios';
import { socket } from './socket';



////////////////////////////////////////////////////////////////////////////////
//////////////////////////// PUSH USER / AI COMMENTS TO STATE //////////////////
////////////////////////////////////////////////////////////////////////////////

// GET ALL USER COMMENTS AND AI RESPONSES AND RENDER THEM TO JSX
// export const displayAllComments = () => {
//     return { type: "GET_ALL_COMMENTS", allComments };
// };


// SHOW PENDING/ACCEPTED FRIEND REQUEST ACTION CREATORS
export const displayMostRecentUserComment = text => {

    const data = [
        {
            sender: 'user',
            text
        }
    ];

    // EMIT COMMENT USER JUST MADE TO SERVER
    socket().emit("userAudio", { text });

    // ADD COMMENT USER JUST MADE TO STATE
    return { type: "GET_MOST_RECENT_USER_COMMENT", data };

};


// SHOW PENDING/ACCEPTED FRIEND REQUEST ACTION CREATORS
export const displayMostRecentAIResponse = zeizaResponse => {

    const data = [
        {
            sender: 'zeiza',
            text: zeizaResponse
        }
    ];

    // ADD COMMENT USER JUST MADE TO STATE
    return { type: "GET_MOST_RECENT_AI_RESPONSE", data };

};



////////////////////////////////////////////////////////////////////////////////
////////////////////////// END PUSH USER / AI COMMENTS TO STATE ////////////////
////////////////////////////////////////////////////////////////////////////////






export const toggleShowIntroComponent = showIntroComponent => {
    return { type: "TOGGLE_INTRO_COMPONENT", showIntroComponent };
}
