//Homepage Automatically returns all Jobs upon loading
//Nav Bar at top to either go to create job page or search

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AllJobsList from "../Components/List";

import API from "../utils/API";


class Homepage extends Component  {
    constructor() {
        super();
        this.state = {
         jobs: [],
        };
      }
      componentDidMount(){
          this.loadJobs();
      }
      loadJobs = () =>{
          API.getAllJobs()
          .then((res) => {
            let savedJobs = res.data;
            this.setState({ jobs: savedJobs });
          })
          .catch((err) => console.log(err));
      };
      makeJobs = (jobs) => {
        return jobs.map(job => {
            return (
                <AllJobsList 
                key={job._id}
                job={job}/>
            )
        })
      }
    
      render(){
        return (
      
        <Container>
          <div className="col-4 mt-4 ml-2 mb-2 d-flex">
  
    {this.makeJobs(this.state.jobs)}
          
          </div>
    </Container>
    
    )
      }
    
}

export default Homepage