var knownCommands = [

    {
        name: 'changeBg',

        variations: [
            'change background colour',
            'make background colour',
            'update background colour',
            'change the colour of the background',
            "make the background's color",
            "change the background's color",
            "update the background's colour"
        ],

        validArguments: [
            'aqua', 'black', 'blue', 'fuchsia', 'grey', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow', 'light grey', 'crimson', 'salmon'
        ],

        handler(text, variations, argument) {
            let col = argument;

            var args = text.replace(variations, '');

            this.validArguments.some(col => {

                if (args.indexOf(col) > -1) {
                    return col;
                } else {
                    let zeizaResponse = "I don't recognize that color";
                    return zeizaResponse;
                }

            });

            document.body.style.background = col;

        }
    }, // END CHANGEBG OBJ




















    {
        name: 'changeFontFamily',

        variations: [
            'change font family',
            'make font family',
            'update font family',
            "change the font",
            "make the font",
            "update the font"
        ],

        validArguments: [
            'sans-serif', 'Helvetica Neue', 'Arial', 'Comic Sans MS', 'cursive', 'Gadget', 'Times New Roman', 'Times', 'serif', 'Georgia', 'Book Antiqua', 'Palatino', 'Palatino Linotype', 'Helvetica', 'Charcoal', 'Impact', 'Lucida Sans Unicode', 'Lucida Grande', 'Tahoma', 'Verdana'
        ],

        handler(text, variations, argument) {
            let col = argument;

            var args = text.replace(variations, '');

            this.validArguments.some(col => {

                if (args.indexOf(col) > -1) {
                    return col;
                } else {
                    let zeizaResponse = "I don't recognize that font";
                    return zeizaResponse;
                }

            });

            document.getElementsByTagName("H1").style.fontFamily = col;

        }
    } // END CHANGEBG OBJ
];


module.exports = knownCommands;
