import React from 'react';
import PropTypes from 'prop-types'

export default function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props
    return (
    <div className = 'filters'>
        {filters.map(el => <button className={selected === el ? 'active filter': 'filter'} onClick={() => onSelectFilter(el)} key={el}>{el}</button>)}
      </div>)
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired, onSelectFilter: PropTypes.func.isRequired, selected: PropTypes.string
}