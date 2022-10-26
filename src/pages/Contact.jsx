import React from 'react'
import styled from 'styled-components'
import {useForm} from "react-hook-form"
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup"


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
        /* display: flex;
        justify-content: center; */
        padding-bottom: 2%;
        margin-left: 300px;
    }
    .Form2{
        display: flex;
        justify-content: center;
    }
    p{
        color: red;
    }
`
const Contact = () => {
    
    const onSubmit = (data) => {
        console.log(data)
    }
    const schema = yup.object().shape({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        age: yup.number().required().positive().integer(),
        email: yup.string().email().required(),
        // website: yup.string().url().required(),
        createdOn: yup.date().default(function () {
          return new Date();
        }),
        message: yup.string().required(),
        password: yup.string().required().min(5, "password is too short").max(15, "password is too long"),
        confirmPassword: yup.string().required().min(5).max(15).oneOf([yup.ref('password'), null], 'Passwords do not match'),
      });
  
    const{register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(schema)})
  return (
    <Container>
    <div>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className='Form'>
            <input type="text" id="name" placeholder="First name" {...register("firstname")}/>
            {errors.firstname && <p>This field is required</p>}
        </div>
        <div className='Form'>
            <input type="text" id="name" placeholder="Last name" {...register("lastname")}/>
            {errors.lastname && <p>This field is required</p>}
        </div>
        <div className='Form'>
            <input type="text" placeholder="E-mail" id="E-mail" {...register("email")} />
            <p>{errors.email?.message}</p>
        </div>
        <div className='Form'>
            <input type="number" placeholder='Age' id='Age' {...register("age")}/>
            <p>{errors.age?.message}</p>
        </div>
        <div className='Form'>
            <input type="text" placeholder='Your message' id='message' {...register("message")}/>
            <p>{errors.message?.message}</p>
        </div>
        <div className='Form'>
            <input type="text" placeholder='Website' id='Web site' {...register("website")}/>
            <p>{errors.website?.message}</p>
        </div>
        <div className='Form'>
            <input type="text" placeholder='Created on' id='Created on' {...register("createdOn")}/>
            <p>{errors.createdOn?.message}</p>
        </div>
        <div className='Form'>
            <input type="text" placeholder='Password' id='password' {...register("password")}/>
            <p>{errors.password?.message}</p>
        </div>
        <div className='Form'>
            <input type="text" placeholder='Confirm password' id='confirm password' {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
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