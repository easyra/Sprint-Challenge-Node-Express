import React from 'react'

const ProjectActionsList = props => {
    const {project, projectActions} = props
    const {name, description} = project ? project : {name:'', description: ''}
    console.log(projectActions)
    return(
        <div>
            <h1>hi</h1>
            {projectActions.map(projectAction => <h1>{projectAction.notes}</h1>)}
        </div>
    )
}

export default ProjectActionsList