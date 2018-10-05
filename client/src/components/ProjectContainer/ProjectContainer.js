import React, { Component, Fragment } from "react";
import axios from "axios";
import ProjectList from "./ProjectList/ProjectList";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigator from "./Navigator/Navigator";
import ProjectDetailsContainer from "./ProjectDetails/ProjectDetailsContainer";

class ProjectContainer extends Component {
  state = {
      actions: [],
      projects: []
  };
  fetchActionData = () => {
    axios
      .get("http://localhost:7000/api/actions")
      .then(res => {
        this.setState({
          actions: res.data
        });
      })
      .catch(err => console.log(err));
  };

  fetchProjectdata = () => {
    axios.get("http://localhost:7000/api/projects").then(res => {
      console.log(res.data);
      this.setState({
        projects: res.data
      });
    });
  };

  render() {
    const { projects, actions } = this.state;
    return (
      <Fragment>
          <Route path="/projects" render={props => {
              return(
                  <Navigator {...props}/>
              )
              
          }} />

        <Switch>
            <Route
            exact
            path="/projects/:projectId"
            render={props => {
                return(
                    <ProjectDetailsContainer projects={projects} {...props}/>
                )
            }}
          />
          <Route
          exact
            path="/projects"
            render={props => {
                return(
                    <ProjectList projects={projects} {...props} />
                )
              
            }}
          />
          

          {/* <Redirect to='/projects'/> */}
        </Switch>
      </Fragment>
    );
  }
  componentDidMount() {
    this.fetchActionData();
    this.fetchProjectdata();
  }
}

export default ProjectContainer;
