import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
padding-bottom: 40px;
    .BGimage{
        height:250px;
        object-fit: cover;
        width: 250px;
        border-radius: 8px;
        padding-bottom: 15px;
        background-size:170%;
        cursor: pointer;
    }
`
const Projectitems = ({name, images, id}) => {
  const navigate = useNavigate()
  return (
    <Container>
      <div onClick={() => {
        navigate("/project/" + id)
      }}>
        <div style={{backgroundImage:`url(${images})`}} className="BGimage"/>
            <h1>{name}</h1>
    </div>
    </Container>
  )
}

export default Projectitems