import React from 'react';
import Store from './components/Store'
import {products} from './components/Products'
import './App.css';

export default class App extends React.Component {
    render() {
        return <Store products={products}/>
    }
};
