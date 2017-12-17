import React from 'react';


export default class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

	render() {

        var userSpeechTranscription = this.props.userSpeechTranscription;

		return (
			<div className = "result-text-div">
				<span className = "result-text">{ userSpeechTranscription }</span>
			</div>
		)
	}

}
