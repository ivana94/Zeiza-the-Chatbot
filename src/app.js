import React from 'react';
import axios from 'axios';
import { socket } from './socket'
import Zeiza from './zeiza'



export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
    }















    componentDidMount() {
        socket();
    }











    render() {


        const { first, last, bio, email, imgurl, uploaderIsVisible, bioUpdateisVisible } = this.state

        const children = React.cloneElement(this.props.children, {

        })

        if (!this.state) {
            return (
                <div>Loading...</div>
            );
        }








        return (
            <div>
                App
                <Zeiza />
            </div>
        ) // END RETURN

    } // END RENDER

} // END COMPONENT
