import React from 'react';
import axios from 'axios';
import { socket } from './socket'



export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
    }















    componentDidMount() {
        socket();
    }











    render() {

        if (!this.state) {
            return (
                <div>Loading...</div>
            );
        }








        return (
            <div>
                App
            </div>
        ) // END RETURN

    } // END RENDER

} // END COMPONENT
