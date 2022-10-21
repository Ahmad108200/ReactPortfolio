import React from 'react'
import { ProjectList } from '../data/Projects'
import { Banner } from './Banner'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
        <Banner>
            <h1>Hi, i am Ahmad</h1>
            <p>I am a software developer with a passion for <br/> learning and creating.</p>
        </Banner>
        <Skills/>
    </div>
  )
}

export default Home