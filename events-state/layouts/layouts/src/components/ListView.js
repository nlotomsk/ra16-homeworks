import React from 'react';
import PropTypes from 'prop-types'

export default function ListView(props) {
    return (<ul className="listview">{props.items}</ul>)
}

ListView.propTypes = {
    items: PropTypes.instanceOf(Object).isRequired
}