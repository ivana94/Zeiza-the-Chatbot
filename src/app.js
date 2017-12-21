import React from 'react';
import axios from 'axios';
import { socket } from './socket'
import Zeiza from './zeiza'
import Result from './results'
import Intro from './intro'
import RecordButton from './button'
import { displayMostRecentUserComment, displayMostRecentAIResponse } from './actions';
import { store } from './start';



export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);

    }




    componentDidMount() {
        socket();
    }







    handleClick() {

        let text;

        // CHECK TO MAKE SURE SPEECH RECOGNITION IS SUPPORTED IN USER'S BROWSER
        if (window['webkitSpeechRecognition']) {

            const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
            const recognition = new SpeechRecognition();

            // USA-ENGLISH
            recognition.lang = 'en-US';

            // PROCESS USER AUDIO WHILE USER IS SPEAKING
            recognition.interimResults = false;

            // SPEECH RECOGNITION WILL NOT END WHEN USER STOPS SPEAKING
            recognition.continuous = false;

            recognition.start();



            recognition.onresult = e => {
                let last = e.results.length - 1;
                text = e.results[last][0].transcript;

                if (text == "start demo") {

                    this.setState({
                        showIntroComponent: true,
                    });

                    recognition.stop();
                    return;

                }

                store.dispatch(displayMostRecentUserComment(text))

                console.log('Confidence: ' + e.results[0][0].confidence);
            }

            recognition.onspeechend = () => {
				recognition.stop();
			}

            recognition.onerror = e => {
				text = 'Error occurred in recognition: ' + e.error;
                store.dispatch(displayMostRecentUserComment(text))
                return;
			}

            // recognition.onend = function() {
            //     recognition.start();
            // }



        }






    }


















    render() {


        if (!this.state) {
            return (
                <div>Loading...</div>
            );
        }








        return (
            <div>

                <button className="RecordButton" onClick = { () => this.handleClick() } ><h1 className = "zeiza-main-tag">Zeiza</h1></button>
                {this.state.showIntroComponent ? <Intro /> : null}
                <Result />
            </div>
        ) // END RETURN

    } // END RENDER

} // END COMPONENT
