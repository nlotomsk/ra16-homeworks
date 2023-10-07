import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import {filters, projects} from '../data'
import PropTypes from 'prop-types'

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: filters, selected: filters[0], projects: projects
        }
    }

    filterProjects = (filter) => {
        let projectsFiltered = (filter === filters[0]) ? projects : projects.filter(item => item.category === filter)
        this.setState({
            selected: filter, projects: projectsFiltered
        })
    }

    render() {
        return (<div>
            <Toolbar
                filters={this.state.filters}
                selected={this.state.selected}
                onSelectFilter={(selected) => this.filterProjects(selected)}/>
            <ProjectList projects={this.state.projects}/>
        </div>)
    }
}

Portfolio.propTypes = {
    projects: PropTypes.array.isRequired, filters: PropTypes.array.isRequired
}