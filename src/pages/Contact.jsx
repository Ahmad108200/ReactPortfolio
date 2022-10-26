import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
h1{
    text-align: center;
font-size: 60px;
font-weight: 600;
color: #3e497a;
padding: 100px 10%;
}
 input{
        width: 600px;
        padding: 12px 20px;
        margin: 2px 0;
        box-sizing: border-box;
        border: 2px solid #ccc;
    }
    button{
        border-radius: 4px;
        background-color: grey;
        border: none;
        color: #fff;
        padding: 16px 32px;
        margin: 4px 2px;
        cursor: pointer;
        font-size: 15px;
    }
    button:hover{
        background-color:#3e497a;
    }
    .Form{
        display: flex;
        justify-content: center;
        padding-bottom: 2%;
    }
    .Form2{
        display: flex;
        justify-content: center;
    }
`
const Contact = () => {
  return (
    <Container>
    <div>
        <h1>Contact Me</h1>
        <form action="">
        <div className='Form'>
            <input type="text" id="name" placeholder="Name"/>
        </div>
        <div className='Form'>
            <input type="text" placeholder="E-mail" id="address"/>
        </div>
        <div className='Form'>
            <input type="text" placeholder='Your message' id='message'/>
        </div>
        <div className='Form2'>
        <button type="submit">
            Submit
        </button>
        </div>
    </form>
    </div>
    </Container>
  )
}

export default Contact