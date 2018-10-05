import React from 'react'

const ProjectCard = props => {
    const {project} = props
    const {name, description} = project
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard