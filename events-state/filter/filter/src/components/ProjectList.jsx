import React from 'react';
import PropTypes from 'prop-types'

export default function ProjectList(props) {
    const {projects} = props
    return (<div className="projects">
        {projects.map((project, i) => <div key={`${project.category}_${i++}`}>
            <img src={project.img} alt={project.category}/>
        </div>)}
    </div>)
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
}