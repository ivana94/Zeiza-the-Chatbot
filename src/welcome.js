import React from 'react';
import Register from './register';
import { Link } from 'react-router';


export default class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        return (
            <div>
                <h1>Zeiza the Chatbot</h1>
                { this.props.children }
            </div>
        )
        
    }


}
