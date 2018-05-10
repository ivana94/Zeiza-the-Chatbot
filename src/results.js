import React from 'react';
import { store } from './start';
import { connect } from 'react-redux';
import { displayMostRecentUserComment, displayMostRecentAIResponse } from './actions';


class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    scrollToBottom() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();

        if (this.elem) {
            this.elem.scrollTop = this.elem.scrollHeight - this.elem.clientHeight;
        }

    }

	render() {

        var message = this.props.message;

        const listOfComments = () => {
            return message.map(msg => {
                return (
                    <div className = { msg.sender }>{ msg.text }</div>
                )
            })
        }



		return (
			<div className = "result-text-div">
				<span className = "messages">{ message && listOfComments() }</span>
                <div style = {{ float: "left", clear: "both" }}
                ref={ el => { this.messagesEnd = el; } }>
                </div>
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
