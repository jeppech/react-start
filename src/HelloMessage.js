import React from 'react';

class HelloMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	componentDidMount() {
		this.intervalId = setInterval(
			() => this.tickTock(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	tickTock() {
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div className="content">
				<h1>Hello {this.props.name}, I am {this.props.what}!</h1>
				<h3>The time is {this.state.date.toLocaleTimeString()}</h3>
			</div>
		);
	}
}

export default HelloMessage;