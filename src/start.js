import React from 'react';
import ReactDOM from 'react-dom';

// IMPORT COMPONENTS
import Welcome from './welcome';
import Login from './login';
import Register from './register';
import App from './app';
import Zeiza from './zeiza'

// IMPORT REDUX & REDUX MIDDLEWARE
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as io from 'socket.io-client';
import { socket } from './socket'

// IMPORT HASH ROUTER. WE WILL USE THIS TO ROUTE USERS NOT LOGGED IN
import { Router, Route, IndexRoute, hashHistory, browserHistory, Redirect } from 'react-router';

// CREATE REDUX STORE AND APPLY REDUX PROMISE MIDDLEWARE
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

let router;














////////////////////////////////////////////////////////////////////////////////
/////////////////////////// SET UP AND USE ROUTERS /////////////////////////////
////////////////////////////////////////////////////////////////////////////////



// THIS ROUTER SHOULD RUN IF THE USER'S NOT LOGGED IN
const notLoggedInRouter = (


        <Router history = { hashHistory }>
            <Route path = "/" component = { Welcome }>
                <Route path = "/login" component = { Login } />
                <IndexRoute component = { Register } />
          	</Route>
        </Router>


)



// THIS ROUTER SHOULD RUN ONCE THE USER IS LOGGED IN
const loggedInRouter = (

    // WRAP ROUTER IN PROVIDER COMPONENT (FROM REDUX) AND PASS STORE TO IT AS PROP
    <Provider store = { store } >

        <Router history = { browserHistory }>
            <Route path = "/" component = { App } >
                <IndexRoute component = { Zeiza } />
            </Route>
        </Router>

    </Provider>

)





// DETERMINES WHICH ROUTER WILL GET USED
// THE SERVER DECIDES WHETHER OR NOT TO DIRECT US TO /WELCOME
if (location.pathname === "/welcome/") {
    router = notLoggedInRouter;
} else {
    router = loggedInRouter
}




////////////////////////////////////////////////////////////////////////////////
///////////////////////// END SET UP AND USE ROUTERS ///////////////////////////
////////////////////////////////////////////////////////////////////////////////















ReactDOM.render(
    router,
    document.querySelector('main')
);
