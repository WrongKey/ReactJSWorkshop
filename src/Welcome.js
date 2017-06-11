import React from 'react';
import PropTypes from 'prop-types';

const Welcome = props => (<h3>Hello, {props.name}. Welcome to react workshop!</h3>);

Welcome.propTypes = {
	name: PropTypes.string
};

export default Welcome;