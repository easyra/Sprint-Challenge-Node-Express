import React from 'react'
import ProjectCard from './ProjectCard';

const ProjectList = props => {
    console.log(props)
    const {projects} = props.projects ? props:{projects:[]}
    return(
        <div>
            {projects.map(project => <ProjectCard project={project} {...props}/>)}
        </div>
    )
}

export default ProjectList