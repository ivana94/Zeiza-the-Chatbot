import React from 'react';

export default function reducer(state = {}, action) {

////////////////////////////////////////////////////////////////////////////////
/////////////////////////// FRIEND COMPONENT REDUCERS //////////////////////////
////////////////////////////////////////////////////////////////////////////////
// PUSH USER'S NEWEST COMMENT TO STATE
    if (action.type == 'GET_MOST_RECENT_USER_COMMENT') {

        if (!state.message) {
            state = Object.assign({}, state, {
                message: action.data
            });
        } else {
            state = Object.assign({}, state, {
                message: state.message.concat(action.data[0])
            });

        }
    }



    // PUSH ZEIZA'S LATEST RESPONSE TO STATE
    if (action.type == 'GET_MOST_RECENT_AI_RESPONSE') {

        state = Object.assign({}, state, {
            message: [ ...state.message, action.data[0] ]
        });
    }


    if (action.type == "TOGGLE_INTRO_COMPONENT") {

        state = Object.assign({}, state, {
            showIntroComponent: action.showIntroComponent
        });

    }


    if (action.type == "TOGGLE_OUTRO_COMPONENT") {

        state = Object.assign({}, state, {
            showOutroComponent: action.showOutroComponent
        });

    }




    console.log("I AM STATE IN REDUCER: ", state);
    return state;
}
