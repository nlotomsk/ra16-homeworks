import React from 'react';
import PropTypes from 'prop-types'

export default function ShopItem(props) {
    const {products} = props
    return products.map(el => <li className="shopitem" key={`${el.name}_${el.color}`}>
        <img alt={el.name} src={el.img}/>
        <h2>{el.name}</h2>
        <p style={{color: "#555555"}}>{el.color}</p>
        <p style={{color: "red"}}>${el.price}</p>
        <button className="btn">Add to card</button>
    </li>);
}

ShopItem.propTypes = {
    products: PropTypes.array.isRequired
}