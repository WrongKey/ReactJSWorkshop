import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';

const Welcome = props => (
	<div>
		<h3>Hello, {props.name}. Welcome to react workshop!</h3>
		<Clock />
	</div>
);

Welcome.propTypes = {
	name: PropTypes.string
};

export default Welcome;