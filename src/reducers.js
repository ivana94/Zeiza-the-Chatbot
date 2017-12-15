import React from 'react';

export default function reducer(state = {}, action) {

////////////////////////////////////////////////////////////////////////////////
/////////////////////////// FRIEND COMPONENT REDUCERS //////////////////////////
////////////////////////////////////////////////////////////////////////////////
    if (action.type == 'GET_ALL_FRIENDS') {
        state = Object.assign({}, state, { friends: action.friends });
    }

    if (action.type == 'ACCEPT_FRIEND_REQUEST') {
        state = Object.assign({}, state, {
            friends: state.friends.map(friend => {

                if (friend.id == action.acceptedFriendRequestId) {
                    return Object.assign({}, friend, { status: "Terminate Friendship" });
                } else {
                    return;
                }

            })
        });
    }


    if (action.type == 'TERMINATE_FRIENDSHIP') {
        state = Object.assign({}, state, {
            friends: state.friends.filter(friend => friend.id != action.terminatedFriendRequestId)
        });
    }

    ////////////////////////////////////////////////////////////////////////////
    ///////////////////////// END FRIEND COMPONENT REDUCERS ////////////////////
    ////////////////////////////////////////////////////////////////////////////












    ////////////////////////////////////////////////////////////////////////////
    /////////////////////////// SOCKET COMPONENT REDUCERS //////////////////////
    ////////////////////////////////////////////////////////////////////////////

    if (action.type == 'USER_JOINED') {
        if (!state.onlineUsers) {
            return state;
        } else {
            state = Object.assign({}, state, {
                onlineUsers: state.onlineUsers.concat(action.userWhoJoined.userWhoJoined)
            });

        }

    }





    // PUSH LIST OF ONLINE USERS TO STATE
    if (action.type == 'LIST_ONLINE_USERS') {
        state = Object.assign({}, state, { onlineUsers: action.onlineUsers.resp });
    }




    // BROADCAST TO ONLINE USERS THAT A USER HAS LEFT
    if (action.type == 'USER_LEFT') {

        if (!state.onlineUsers) {
            return state;
        } else {
            state = Object.assign({}, state, {
                onlineUsers: state.onlineUsers.filter(userLeft => {
                    return userLeft.id !== action.userWhoLeft.userWhoLeft.userId;
                })
            });
        }

    } // END USER LEFT REDUCER


    ////////////////////////////////////////////////////////////////////////////
    ///////////////////////// END SOCKET COMPONENT REDUCERS ////////////////////
    ////////////////////////////////////////////////////////////////////////////









    ////////////////////////////////////////////////////////////////////////////
    /////////////////////////// CHAT COMPONENT REDUCERS ////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    // THIS WILL PUSH MESSAGES ARRAY FROM THE SERVER TO THE REDUX STORE
    // THIS IS THE ONLY UPDATE TO THE STORE THAT HAPPENS IN THE CHAT COMPONENT
    if (action.type == 'GET_MESSAGES_TO_DISPLAY') {
        state = Object.assign({}, state, { displayMessages: action.chats });
    }

    ////////////////////////////////////////////////////////////////////////////
    ///////////////////////// END CHAT COMPONENT REDUCERS //////////////////////
    ////////////////////////////////////////////////////////////////////////////



    return state;
}
