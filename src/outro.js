import React from 'react';




export default class Outro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.querySelector("h1.zeiza-main-tag").style.color = "white";


        setTimeout(() => {
            synthVoice("Thank you for your time.")



            setTimeout(() => {

                document.querySelector(".spiced").style.display = "block";

            }, 3000)



        }, 2000);
    }











  render() {

    return (
        <div className = "intro">

            <p className = "first-outro">Thank you for your time.</p>

            <img src = "https://assets.codebar.io/b//uploads/sponsor/avatar/250/Spiced_Logo.png" className = "spiced" />

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
