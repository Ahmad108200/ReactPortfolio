import React from 'react'
import styled from "styled-components";

const Container = styled.div`
background-color: #fafafa;
color : #3e497a;
padding: 100px 10%;
.title {
text-align: center;
margin-bottom: 100px;
font-size: 60px;
font-weight: 600;
}
.frontend{
    margin-bottom: 30px;
}
.frontend h1{
    font-size: 51px;
    margin-bottom: 20px;
}
 span{
    font-size: 25px;
}
.backend h1{
    font-size: 51px;
    margin-bottom: 20px;
}
.lan h1 {
    font-size: 51px;
    margin-bottom: 20px;
}
`
const Skills = () => {
  return (
    <Container>
        <div>
            <h1 className='title'>Skills</h1>
        </div>
        <div className='frontend'>
        <h1>Front-End</h1>
        <span>ReactJS, Angular, Redux, HTML, Css, React Native, Flutter, NPM, Ionic, Bootstrap, Material-UI, Yarn, TailwindCSS, StyledComponents</span>
        </div>
        <div className='backend'>
            <h1>Back-End</h1>
            <span>NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL</span>
        </div>
        <div className='lan'>
            <h1>Languages</h1>
            <span>
                JavaScript, Java, Python, C#, C++ ,Typescript, Go
            </span>
        </div>
    </Container>
  )
}

export default Skills