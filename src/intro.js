import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { socket } from './socket'
import axios from 'axios';




export default class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.querySelector(".zeiza-main-tag").style.color = "white";


        setTimeout(() => {
            synthVoice("Hello.")

            setTimeout(() => {
                synthVoice("My name is Zeiza, and I am a simple voice-powered A.I. chatbot. You can voice questions and commands at me, and I'll respond by either making a comment or taking an action.")

                    setTimeout(() => {
                        synthVoice("Alright, let's get going.")

                        setTimeout(() => {

                            location.reload()

                        }, 13000)
                    }, 2000)
            }, 2000)
        }, 2000);
    }


    handleClick() {

        this.setState({
            showIntroComponent: false,
        });

    }








  render() {

    return (
        <div className = "intro">

            <p className = "first">Hello.</p>

            <p className = "second">My name is Zeiza, and I am a simple voice-powered A.I. chatbot.</p>

            <p className = "third">You can voice questions and commands at me, and I'll respond by either making a comment or taking an action.</p>

            <p className = "fourth">Alright, let's get going.</p>

        </div>
    )

  }







}














function synthVoice(text) {

    const synth = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;

    msg.voiceURI = 'Native';
    msg.volume = 1;
    msg.rate = 1;
    msg.lang = 'en-IE';

    synth.speak(msg);
}
