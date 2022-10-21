import React from 'react'
import styled from 'styled-components'
import Projectitems from '../components/Projectitems'
import { ProjectList } from '../data/Projects'

const Container = styled.div`
background-color: #fafafa;
.projects{
    text-align: center;
    padding: 100px 10%;
}
.projects h1{
    color: #3e497a;
    /* padding: 100px 10%; */
    font-size: 51px;
}
.projectlist{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding-left: 100px;
    color: #3e497a;
    align-content: center;
    font-size: 15px;
    font-family: 'Secular One', sans-serif;
font-family: 'Work Sans', sans-serif;
}
`
const Projects = () => {
  return (
    <Container>
        <div className='projects'>
            <h1>My personal projects</h1>
        </div>
        <div className='projectlist'>
            {ProjectList.map((Projects, index) => {
                return(
                    <Projectitems id={index} name={Projects.name} images={Projects.images}/>
                )
            }) }
        </div>
    </Container>
  )
}

export default Projects