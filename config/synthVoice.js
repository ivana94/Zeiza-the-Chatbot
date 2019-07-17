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





//
// [
//   {
//     "voiceURI": "Samantha",
//     "name": "Samantha",
//     "lang": "en-US",
//     "localService": true,
//     "default": true
//   },
//   {
//     "voiceURI": "Alex",
//     "name": "Alex",
//     "lang": "en-US",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Alice",
//     "name": "Alice",
//     "lang": "it-IT",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Alva",
//     "name": "Alva",
//     "lang": "sv-SE",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Amelie",
//     "name": "Amelie",
//     "lang": "fr-CA",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Anna",
//     "name": "Anna",
//     "lang": "de-DE",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Carmit",
//     "name": "Carmit",
//     "lang": "he-IL",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Damayanti",
//     "name": "Damayanti",
//     "lang": "id-ID",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Daniel",
//     "name": "Daniel",
//     "lang": "en-GB",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Diego",
//     "name": "Diego",
//     "lang": "es-AR",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Ellen",
//     "name": "Ellen",
//     "lang": "nl-BE",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Fiona",
//     "name": "Fiona",
//     "lang": "en",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Fred",
//     "name": "Fred",
//     "lang": "en-US",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Ioana",
//     "name": "Ioana",
//     "lang": "ro-RO",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Joana",
//     "name": "Joana",
//     "lang": "pt-PT",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Jorge",
//     "name": "Jorge",
//     "lang": "es-ES",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Juan",
//     "name": "Juan",
//     "lang": "es-MX",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Kanya",
//     "name": "Kanya",
//     "lang": "th-TH",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Karen",
//     "name": "Karen",
//     "lang": "en-AU",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Kyoko",
//     "name": "Kyoko",
//     "lang": "ja-JP",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Laura",
//     "name": "Laura",
//     "lang": "sk-SK",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Lekha",
//     "name": "Lekha",
//     "lang": "hi-IN",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Luca",
//     "name": "Luca",
//     "lang": "it-IT",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Luciana",
//     "name": "Luciana",
//     "lang": "pt-BR",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Maged",
//     "name": "Maged",
//     "lang": "ar-SA",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Mariska",
//     "name": "Mariska",
//     "lang": "hu-HU",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Mei-Jia",
//     "name": "Mei-Jia",
//     "lang": "zh-TW",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Melina",
//     "name": "Melina",
//     "lang": "el-GR",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Milena",
//     "name": "Milena",
//     "lang": "ru-RU",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Moira",
//     "name": "Moira",
//     "lang": "en-IE",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Monica",
//     "name": "Monica",
//     "lang": "es-ES",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Nora",
//     "name": "Nora",
//     "lang": "nb-NO",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Paulina",
//     "name": "Paulina",
//     "lang": "es-MX",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Sara",
//     "name": "Sara",
//     "lang": "da-DK",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Satu",
//     "name": "Satu",
//     "lang": "fi-FI",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Sin-ji",
//     "name": "Sin-ji",
//     "lang": "zh-HK",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Tessa",
//     "name": "Tessa",
//     "lang": "en-ZA",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Thomas",
//     "name": "Thomas",
//     "lang": "fr-FR",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Ting-Ting",
//     "name": "Ting-Ting",
//     "lang": "zh-CN",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Veena",
//     "name": "Veena",
//     "lang": "en-IN",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Victoria",
//     "name": "Victoria",
//     "lang": "en-US",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Xander",
//     "name": "Xander",
//     "lang": "nl-NL",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Yelda",
//     "name": "Yelda",
//     "lang": "tr-TR",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Yuna",
//     "name": "Yuna",
//     "lang": "ko-KR",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Yuri",
//     "name": "Yuri",
//     "lang": "ru-RU",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Zosia",
//     "name": "Zosia",
//     "lang": "pl-PL",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Zuzana",
//     "name": "Zuzana",
//     "lang": "cs-CZ",
//     "localService": true,
//     "default": false
//   },
//   {
//     "voiceURI": "Google Deutsch",
//     "name": "Google Deutsch",
//     "lang": "de-DE",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google US English",
//     "name": "Google US English",
//     "lang": "en-US",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google UK English Female",
//     "name": "Google UK English Female",
//     "lang": "en-GB",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google UK English Male",
//     "name": "Google UK English Male",
//     "lang": "en-GB",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google español",
//     "name": "Google español",
//     "lang": "es-ES",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google español de Estados Unidos",
//     "name": "Google español de Estados Unidos",
//     "lang": "es-US",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google français",
//     "name": "Google français",
//     "lang": "fr-FR",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google हिन्दी",
//     "name": "Google हिन्दी",
//     "lang": "hi-IN",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google Bahasa Indonesia",
//     "name": "Google Bahasa Indonesia",
//     "lang": "id-ID",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google italiano",
//     "name": "Google italiano",
//     "lang": "it-IT",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google 日本語",
//     "name": "Google 日本語",
//     "lang": "ja-JP",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google 한국의",
//     "name": "Google 한국의",
//     "lang": "ko-KR",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google Nederlands",
//     "name": "Google Nederlands",
//     "lang": "nl-NL",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google polski",
//     "name": "Google polski",
//     "lang": "pl-PL",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google português do Brasil",
//     "name": "Google português do Brasil",
//     "lang": "pt-BR",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google русский",
//     "name": "Google русский",
//     "lang": "ru-RU",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google 普通话（中国大陆）",
//     "name": "Google 普通话（中国大陆）",
//     "lang": "zh-CN",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google 粤語（香港）",
//     "name": "Google 粤語（香港）",
//     "lang": "zh-HK",
//     "localService": false,
//     "default": false
//   },
//   {
//     "voiceURI": "Google 國語（臺灣）",
//     "name": "Google 國語（臺灣）",
//     "lang": "zh-TW",
//     "localService": false,
//     "default": false
//   }
// ]
