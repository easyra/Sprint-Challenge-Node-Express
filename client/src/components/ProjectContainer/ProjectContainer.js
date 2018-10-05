import React, { Component, Fragment } from 'react'
import axios from 'axios'
import ProjectList from './ProjectList/ProjectList';

class ProjectContainer extends Component {
    state = {

    }
    fetchActionData = () => {
        axios.get('http://localhost:7000/api/actions').then(res => {
            this.setState({
                actions: res.data
            })
        }).catch(err => console.log(err))
    }

    fetchProjectdata = () => {
        axios.get('http://localhost:7000/api/projects').then(res =>  {
            console.log(res.data)
            this.setState({
                projects: res.data
            })
        })
    }

    render(){
        const {projects, actions} = this.state
        return(
            <Fragment>
                <ProjectList projects={projects}/>
            </Fragment>
        )
    }
    componentDidMount(){
        this.fetchActionData()
        this.fetchProjectdata()        
    }
}

export default ProjectContainer