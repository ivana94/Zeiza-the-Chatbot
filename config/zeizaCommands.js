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
            "update the background's colour",
            'update the background colour',
            'change the background colour',
            'make the background colour'
        ],

        validArguments: [
            'aqua', 'black', 'blue', 'fuchsia', 'grey', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow', 'light grey', 'crimson', 'salmon', "pink"
        ],

        handler(text, variations, argument, socket) {
            let col = argument;
            var hex;

            var args = text.replace(variations, '');
            console.log("ARGS IN ZCZCZCZCZCZC: ", args);


            this.validArguments.some(col => {

                if (args.indexOf("hashtag") > -1) {
                    // IF I MAKE IT HERE, THIS MEANS USER IS TRYING TO CHANGE COLOR TO HEX VALUE
                    var index = args.indexOf("g ") + 2;
                    hex = "#" + args.slice(index);
                    return hex;
                } else {
                    // IF NOT HEX THEN USER GAVE US COLOR BY NAME SO RUN THIS CODE
                    if (args.indexOf(col) > -1) {
                        return col;
                    } else {
                        let zeizaResponse = "I don't recognize that color";
                        return zeizaResponse;
                    }
                }

            });



            if (hex) {
                col = hex;
            }


            let data = {
                type: "changeBg",
                col
            };

            console.log("DATA: ", data);
            socket.emit("zeizaCommand", data);

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
            'sans-serif', 'helvetica beue', 'arial', 'comic sans ms', 'cursive', 'gadget', 'times new roman', 'times', 'serif', 'georgia', 'book antiqua', 'palatino', 'palatino linotype', 'helvetica', 'charcoal', 'impact', 'lucida sans unicode', 'lucida grande', 'tahoma', 'verdana'
        ],

        handler(text, variations, argument, socket) {
            let col = argument;

            var args = text.replace(variations, '');

            this.validArguments.some(col => {


                if (args.indexOf(col) > -1) {
                    return col;
                } else {
                    let zeizaResponse = "Sorry, but I don't recognize " + col;
                    return zeizaResponse;
                }

            });

            var data = {
                type: "changeFontFamily",
                col
            };

            console.log("col", col);
            socket.emit("zeizaCommand", data);

        }
    }, // END CHANGEBG OBJ











    {
        name: 'changeFontColor',

        variations: [
            'change font colour',
            'make font colour',
            'update font colour',
            'change the colour of the font',
            "make the font's color",
            "change the font's color",
            "update the font's colour",
            'update the font colour',
            'change the font colour',
            'make the font colour'
        ],

        validArguments: [
            'aqua', 'black', 'blue', 'fuchsia', 'grey', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow', 'light grey', 'crimson', 'salmon', "pink", "a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9
        ],

        handler(text, variations, argument, socket) {
            let col = argument;
            var hex;

            var args = text.replace(variations, '');
            console.log("ARGS: ", col);



            this.validArguments.some(col => {

                if (args.indexOf("hashtag") > -1) {
                    // IF I MAKE IT HERE, THIS MEANS USER IS TRYING TO CHANGE COLOR TO HEX VALUE
                    var index = args.indexOf("g ") + 2;
                    hex = "#" + args.slice(index);
                    return hex;
                } else {
                    // IF NOT HEX THEN USER GAVE US COLOR BY NAME SO RUN THIS CODE
                    if (args.indexOf(col) > -1) {
                        return col;
                    } else {
                        let zeizaResponse = "I don't recognize that color";
                        return zeizaResponse;
                    }
                }


            });

            if (hex) {
                col = hex;
            }

            let data = {
                type: "changeFontColor",
                col
            };

            socket.emit("zeizaCommand", data);

        }
    }, // END CHANGEBG OBJ






    {
        name: 'fadeText',

        variations: [
            'fade',
            'decrease opacity',
            'make text disappear',
            'make text invisible'
        ],

        validArguments: [
            'fade'
        ],

        handler(text, variations, argument, socket) {
            let col = argument;

            var args = text.replace(variations, '');

            this.validArguments.some(col => {

                if (args.indexOf(col) > -1) {
                    return col;
                } else {
                    let zeizaResponse = "I don't recognize that command";
                    return zeizaResponse;
                }

            });

            let data = {
                type: "fadeText",
                col
            };

            socket.emit("zeizaCommand", data);

        }
    }, // END CHANGEBG OBJ






    {
        name: 'bringBackText',

        variations: [
            'bring back text',
            'increase opacity',
            'make text appear',
            'make text visible',
            'bring back the text',
            'bring back the heading',
            'come back'
        ],

        validArguments: [
            'bring back text'
        ],

        handler(text, variations, argument, socket) {
            let col = argument;

            var args = text.replace(variations, '');

            this.validArguments.some(col => {

                if (args.indexOf(col) > -1) {
                    return col;
                } else {
                    let zeizaResponse = "I don't recognize that command";
                    return zeizaResponse;
                }

            });

            let data = {
                type: "bringBackText",
                col
            };

            socket.emit("zeizaCommand", data);

        }
    }, // END CHANGEBG OBJ








    {
        name: 'changeOpacity',

        variations: [
            'change opacity',
            'update opacity',
            'make the opacity',
            'update the opacity',
            'change the opacity',
            'make text more opaque'
        ],

        validArguments: [
            0, .1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1
        ],

        handler(text, variations, argument, socket) {
            let col = argument;


            var args = text.replace(variations, '');
            console.log("ARGS: ", args);

            this.validArguments.some(col => {

                if (args.indexOf(col) > -1) {
                    console.log("COL: ", col);
                    return col;
                } else {
                    let zeizaResponse = "I don't recognize that command";
                    return zeizaResponse;
                }

            });

            let data = {
                type: "changeOpacity",
                col
            };

            console.log("DATA: ", data);
            socket.emit("zeizaCommand", data);

        }
    }, // END CHANGEBG OBJ









    {
        name: 'changePadding',

        variations: [
            'change padding',
            'update padding',
            'make the padding',
            'update the padding',
            'change the padding',
            'add more padding',
            'decrease padding',
            'make less padding'
        ],

        validArguments: [
            0, .1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1
        ],

        handler(text, variations, argument, socket) {
            let col = argument;


            var args = text.replace(variations, '');
            console.log("ARGS: ", args);

            this.validArguments.some(col => {

                if (args.indexOf(col) > -1) {
                    console.log("COL: ", col);
                    return col;
                } else {
                    let zeizaResponse = "I don't recognize that command";
                    return zeizaResponse;
                }

            });

            let data = {
                type: "changeOpacity",
                col
            };

            console.log("DATA: ", data);
            socket.emit("zeizaCommand", data);

        }
    } // END CHANGEBG OBJ

];


module.exports = knownCommands;
