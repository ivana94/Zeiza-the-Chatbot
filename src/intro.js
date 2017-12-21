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
                synthVoice("My name is Zeiza, and I am a simple talking A.I. chatbot. You can voice questions and commands at me, and I'll respond by either making a comment or taking an action.")

                setTimeout(() => {
                    synthVoice("I was created by Ivana at SPICED Academy in Berlin.")

                    setTimeout(() => {
                        synthVoice("Alright, let's get going.")
                    })
                }, 1500)
            }, 1500)
        }, 2000);
    }










  render() {

    return (
        <div className = "intro">

            <p className = "first">Hello.</p>

            <p className = "second">My name is Zeiza, and I am a simple talking AI chatbot. You can voice questions and commands at me, and I'll respond by making comment or taking an action.</p>

            <p className = "third">I was created by Ivana at SPICED Academy in Berlin.</p>

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
