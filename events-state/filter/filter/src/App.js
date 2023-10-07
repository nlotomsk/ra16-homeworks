import React from 'react';
import Portfolio from './components/Portfolio';
import './App.css';
import {filters, projects} from './data'

export default function App () {
    return (
    <Portfolio filters={filters} projects={projects}/>
    )
}