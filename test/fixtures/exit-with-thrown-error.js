'use strict';
const React = require('react');
const {render} = require('../..');

class Test extends React.Component {
	render() {
		throw new Error('errored');
	}
}

const app = render(<Test/>);

app.waitUntilExit().catch(error => console.log(error.message));
