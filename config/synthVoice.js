// CREATE SYNTHETIC VOICE FOR ZEIZA
export default function synthVoice(text) {

    // CREATE CONTEXT FOR SPEECH SYNTHESIS
    const synth = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance();
    var voices = synth.getVoices();

    // DEFINE WHAT TEXT ZEIZA WILL BE SPEAKING
    msg.text = text;

    // CUSTOMIZE ZEIZA'S VOICE
    msg.voiceURI = 'Native';
    msg.volume = 1;
    msg.rate = 1;
    msg.lang = 'en-IE';

    synth.speak(msg);
}
