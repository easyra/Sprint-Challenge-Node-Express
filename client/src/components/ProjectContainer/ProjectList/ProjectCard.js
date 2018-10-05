import React from 'react'

const ProjectCard = props => {
    const {project} = props
    const {name, description, id} = project
    return (
        <div onClick={() => props.history.push(`/projects/${id}`)}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard