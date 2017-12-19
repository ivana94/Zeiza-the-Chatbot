import React from 'react';
import { store } from './start';
import { connect } from 'react-redux';
import { displayMostRecentUserComment, displayMostRecentAIResponse } from './actions';


class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate() {

        if (this.elem) {
            this.elem.scrollTop = this.elem.scrollHeight - this.elem.clientHeight;
        }

    }

	render() {

        var message = this.props.message;

        console.log("message: ", message);

        const listOfComments = () => {
            return message.map(msg => {
                return (
                    <div className = { msg.sender }>{ msg.text }</div>
                )
            })
        }

        const listOfZeizaResponses = () => {
            return zeizaResponse.map(zeiza => {
                return (
                    <div>
                        { zeiza }
                    </div>
                )
            })
        }

        console.log("this userComment;", listOfComments);



		return (
			<div className = "result-text-div">
				<span className = "messages">{ message && listOfComments() }</span>
			</div>
		)
	}

}

const mapStateToProps = (state) => {

    return {
        message: state.message
     }

}



export default connect(mapStateToProps)(Result);













// [
//     {
//         sender: 'user',
//         message: "yo"
//     },
//
//     {
//         sender: 'computer',
//         message: "hi"
//     }
// ]
//
// // put in 1 array but an property of who the sender is
//
//
// messages.map(msg => {
//     return (
//         <div className = { msg.sender}>{msg.message}</div>
//     )
// })
