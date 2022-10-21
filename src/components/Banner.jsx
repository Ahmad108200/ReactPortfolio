import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

.banner{
    background:#21325E;
    min-height:500px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    line-height:60px;
}
.banner h1{
    color:goldenrod;
    text-transform:uppercase;
    font-size:70px;
    font-family: 'Lilita One', cursive;
font-family: 'Secular One', sans-serif;
font-family: 'Work Sans', sans-serif;
    font-weight:20px;
}
.banner p{
    color: #fff;
    font-size:28px;
    text-align: center;
    line-height: normal;
    padding-top: 15px;
    font-family: 'Secular One', sans-serif;
    font-family: 'Work Sans', sans-serif;
}
`
export const Banner = (props) => {
  return (
    <Container>
        <div className='banner'>
            {props.children}
        </div>
    </Container>
  )
}
