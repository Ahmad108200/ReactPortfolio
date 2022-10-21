import { useParams } from "react-router-dom";
import React from 'react'
import { ProjectList } from "../data/Projects";
import {BsGlobe,BsGithub } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  .Projectstyle h1 {
    text-align: center;
    padding: 80px 10%;
    color: #3e497a;
  }
  .Projectstyle img{
    height: 300px;
    width: 300px;
    border-radius: 8px;
    margin-left: 30%;
    object-fit: cover;
    /* padding-left: 30px; */
  }
  .style{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .skill{
    text-align: left;
    padding-top:20%;
    font-size: 30px;
   
  }
  .skill p{
     color: #3e497a;
     text-transform: capitalize;
     padding-bottom: 15px;
  }
  .skill div{
    margin: 5px;
  }
`
const Projectdisplay = () => {
    const {id} = useParams()
    const project = ProjectList[id]
  return (
    <Container>
    <div className="Projectstyle">
        <h1>{project.name}</h1>
       <div className="style">
       <img src={project.images} alt="pic" />
        <div className="skill">
        <p>
            <b>Skills: </b>{project.skills}
        </p>
        <div>
            <BsGithub color='#171515' />
            <BsGlobe  style={{paddingLeft: '25px',}}/>
        </div>
        </div>
       </div>
    </div>
    </Container>
  )
}

export default Projectdisplay