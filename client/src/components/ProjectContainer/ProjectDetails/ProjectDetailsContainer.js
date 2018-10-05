import React, { Component } from 'react'
import ProjectActionsList from './ProjectActionsList';
import ProjectList from '../ProjectList/ProjectList';
import axios from 'axios'

class ProjectDetailsContainer extends Component{
    state= {
        projectActions: []
    }

    fetchProjectActions = projectId => {
        axios.get(`http://localhost:7000/api/projects/actions/${projectId}`).then( res =>{
            console.log(res.data);
            this.setState({
                projectActions: res.data
            })
        })
    }

    render(){
        const {projectId} =  this.props.match.params
        const project = this.props.projects.find(project => project.id === parseInt(projectId))
        //const {name, description} = project ? project : {name:'', description: ''}
        return(
            <ProjectActionsList project={project} projectActions={this.state.projectActions} {...this.props}/>
        )
    }

    componentDidMount(){
        const {projectId} = this.props.match.params
        this.fetchProjectActions(projectId)

    }
}
export default ProjectDetailsContainer