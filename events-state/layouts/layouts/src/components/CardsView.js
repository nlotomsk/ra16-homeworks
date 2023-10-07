import React from 'react';
import PropTypes from 'prop-types'

export default function CardsView(props) {
    const {cards} = props
    return (<div className="cardview">{cards}</div>)
}

CardsView.propTypes = {
    cards: PropTypes.instanceOf(Object).isRequired
}