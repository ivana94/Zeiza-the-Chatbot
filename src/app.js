import React from 'react';
import axios from 'axios';
import { socket } from './socket'
import Zeiza from './zeiza'
import Results from './results'
import RecordButton from './button'



export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userSpeechTranscription: "Initial userSpeechTranscription state: ---"
        };
    }

    updateState(userSpeechTranscription) {

        this.setState({
            userSpeechTranscription: userSpeechTranscription
        });

    }



    componentDidMount() {
        socket();


            // checkHTMLForGetUserMedia();
            //
            // // window.AudioContext = (window.AudioContext || window.webkitAudioContext);
            //
            // // // NAME OF MY AUDIO TAG IN INDEX.HTML
            // var player = document.getElementById('player');
            //
            // // // DEFINE ERROR CALLBACK
            // var errorCallback = e => {
            //     console.log('Error callback.', e);
            // };
            // //
            // // // STREAM IS WHAT IS RETURNED FROM THE GETMEDIAUSER API
            // navigator.mediaDevices.getUserMedia( { audio: true, video: false } ).then(stream => {
            //     console.log("I AM THE STREAM: ", stream);
            //
            //     if (window.URL) {
            //         player.src = window.URL.createObjectURL(stream);
            //     } else {
            //         player.src = stream;
            //     }
            //
            //     // HAVE TO CREATE A NEW AUDIO CONTEXT, SIMILAR TO HOW WE HAVE TO CREATE A CONTEXT
            //     // IN ORDER FOR CANVAS TO WORK
            //     // THIS AUDIO CONTEXT WILL BE PARENT TO FUTURE AUDIO OBJECTS TO COME
            //     // THIS AUDIO CONTEXT INITIALIZES WHEN PAGE LOADS
            //     var context = new AudioContext();
            //
            //     var microphone = context.createMediaStreamSource(stream);
            //     var filter = context.createScriptProcessor(1024, 1, 1);
            //
            //     microphone.connect(filter);
            //     filter.connect(context.destination);
            //
            //     filter.onaudioprocess = e => {
            //         var inputBuffer = e.inputBuffer;
            //
            //         // socket.emit("userAudio", inputBuffer => {
            //         //     console.log("inputBuffer in view", inputBuffer);
            //         // });
            //
            //     }
            //
            // }, errorCallback);
            //
            //
            //
            // // CHECK TO MAKE SURE USER'S BROWSER SUPPORTS GETUSERMEDIA
            // function checkHTMLForGetUserMedia() {
            //     return !!( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia );
            // }
            //
            // if (checkHTMLForGetUserMedia()) {
            //     console.log("user's browser supports getUserMedia.");
            // } else {
            //     alert('getUserMedia() is not supported in your browser');
            // }





    }







    handleClick() {

        let userSpeechTranscription;

        // CHECK TO MAKE SURE SPEECH RECOGNITION IS SUPPORTED IN USER'S BROWSER
        if (window['webkitSpeechRecognition']) {

            const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
            const recognition = new SpeechRecognition();

            // USA-ENGLISH
            recognition.lang = 'en-US';

            // PROCESS USER AUDIO WHILE USER IS SPEAKING
            recognition.interimResults = true;

            // SPEECH RECOGNITION WILL NOT END WHEN USER STOPS SPEAKING
            recognition.continuous = true;

            recognition.start();



            recognition.onresult = e => {
                console.log("onresult", e.results);

                let last = e.results.length - 1;
                let text = e.results[last][0].transcript;
                userSpeechTranscription = 'You: ' + text;
                this.updateState(userSpeechTranscription);

                socket().emit("userAudio", { text })

                console.log('Confidence: ' + e.results[0][0].confidence);
            }

            recognition.onspeechend = () => {
				recognition.stop();
			}

            recognition.onerror = e => {
				userSpeechTranscription = 'Error occurred in recognition: ' + e.error;
				this.updateState(userSpeechTranscription);
			}

            recognition.onend = function() {
                recognition.start();
            }



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
                App
                <Zeiza />
                <RecordButton handleClick = {this.handleClick.bind(this)} />
                <Results userSpeechTranscription = { this.state.userSpeechTranscription } />
            </div>
        ) // END RETURN

    } // END RENDER

} // END COMPONENT
