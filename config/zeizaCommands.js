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





    //
    //
    //
    // {
    //     name: 'changeFontColor',
    //
    //     variations: [
    //         'change font colour',
    //         'make font colour',
    //         'update font colour',
    //         'change the colour of the font',
    //         "make the font's colour",
    //         "change the font's colour",
    //         "update the font's colour",
    //         'update the font colour',
    //         'change the font colour',
    //         'make the font colour'
    //     ],
    //
    //     validArguments: [
    //         'aqua', 'black', 'blue', 'fuchsia', 'grey', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow', 'light grey', 'crimson', 'salmon'
    //     ],
    //
    //     handler(text, variations, argument, socket) {
    //         let col = argument;
    //
    //         var args = text.replace(variations, '');
    //
    //         this.validArguments.some(col => {
    //
    //             if (args.indexOf(col) > -1) {
    //                 return col;
    //             } else {
    //                 let zeizaResponse = "I don't recognize that color";
    //                 return zeizaResponse;
    //             }
    //
    //         });
    //
    //         let data = {
    //             type: "changeFontColor",
    //             col
    //         };
    //
    //         socket.emit("zeizaCommand", data);
    //
    //     }
    // }, // END CHANGEBG OBJ
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // {
    //     name: 'changeFontSize',
    //
    //     variations: [
    //         'change font size',
    //         'make font size',
    //         'update font size',
    //         'change the size of the font',
    //         "make the font's size",
    //         "change the font's size",
    //         "update the font's size",
    //         'update the font size',
    //         'change the font size',
    //         'make the font size'
    //     ],
    //
    //     validArguments: arguments,
    //
    //     handler(text, variations, argument, socket) {
    //         let col = argument;
    //
    //         var args = text.replace(variations, '');
    //
    //         this.validArguments.some(col => {
    //
    //             if (args.indexOf(col) > -1) {
    //                 return col;
    //             } else {
    //                 let zeizaResponse = "I don't recognize that color";
    //                 return zeizaResponse;
    //             }
    //
    //         });
    //
    //         let data = {
    //             type: "changeFontColor",
    //             col
    //         };
    //
    //         socket.emit("zeizaCommand", data);
    //
    //     }
    // }, // END CHANGEBG OBJ
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // {
    //     name: 'changeWidth',
    //
    //     variations: [
    //         'change my width',
    //         'make user width',
    //         "change user's width",
    //         "change width of user",
    //         "update width of user",
    //         'update width of zeiza',
    //         'change her width',
    //         'make computer width',
    //         "set computer's width",
    //         "change zeiza's width",
    //         "change width of zeiza",
    //         "update width of zeiza"
    //     ],
    //
    //     validArguments: [
    //         'aqua', 'black', 'blue', 'fuchsia', 'grey', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow', 'light grey', 'crimson', 'salmon'
    //     ],
    //
    //     handler(text, variations, argument, socket) {
    //         let col = argument;
    //
    //         var args = text.replace(variations, '');
    //
    //         this.validArguments.some(col => {
    //
    //             if (args.indexOf(col) > -1) {
    //                 return col;
    //             } else {
    //                 let zeizaResponse = "That's not a real width value";
    //                 return zeizaResponse;
    //             }
    //
    //         });
    //
    //         let data = {
    //             type: "changeFontColor",
    //             col
    //         };
    //
    //         socket.emit("zeizaCommand", data);
    //
    //     }
    // }, // END CHANGEBG OBJ
];


module.exports = knownCommands;
