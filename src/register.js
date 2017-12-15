import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';


export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange(e) {
        this.setState( { [e.target.name]: e.target.value } );
    }



    handleSubmit() {
        axios.post("/register", this.state).then((resp) => {
            if (resp.data.success) {
                // THIS WON'T RUN UNTIL RECEIVES RESPONSE FROM SERVER
                location.replace("/")
            } else {
                // IF ERROR SET ERROR STATE ON REGISTER
                this.setState({
                    error: true
                })
            } // END ELSE
        }) // END THEN
    } // END HANDLESUBMIT

    render() {
        return (

            <div className = "welcome-container">

                <h2>Register</h2>

                    {this.state.error && <div>error</div> }
                    <input onChange = {(e) => this.setState({ first: e.target.value })} value = {this.state.first} placeholder = "first" name = "first" />
                    <input onChange = {(e) => this.setState({ last: e.target.value })} value = {this.state.last} placeholder = "last" name = "last" />
                    <input onChange = {(e) => this.setState({ email: e.target.value })} value = {this.state.email} placeholder = "email" name = "email" />
                    <input onChange = {(e) => this.setState({ password: e.target.value })} value = {this.state.password} placeholder = "password" name = "password" type = "password" />
                    <button onClick={ (e) => this.handleSubmit()}>register</button><br /><br />
                    <span id = "link">Already have an account? <Link to ="/login">Login here!</Link></span>

            </div>
        )



    }



}
