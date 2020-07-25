import React, { useState } from 'react'
import InputForm from './InputForm';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/authReducer/authAction';
import { Container, Typography, Button } from '@material-ui/core';
import { formStyles } from './AccountStyles';


 const SignIn = ({toggleSignin}) => {
    const [form , setform] = useState({
        email : '',
        password : '',
        emailError : '',
        passwordError : ''
      
    })

    const dispatch = useDispatch();
    const authErr = useSelector(state => state.auth.authErr)
    const {email , password ,  emailError , passwordError} =form;

   const handleSubmit = (event) => {
      
    event.preventDefault();
      
        if( emailError || passwordError){
            alert('invalid credentials')
        } else{
            dispatch(signIn({email , password}))
        }
    }

    const handleChange = (event) => {
        const{name , value} = event.target;
            setform({
                ...form,
                [name] : value
            })
        }
    
    const validate = (nameError , error) => {
            setform({
                ...form,
                [nameError] : error
            })
        }
    
    const errorNull = (nameError ) => {
            setform({
                ...form,
                [nameError] : ''
            })
        }
    

    const classes = formStyles();
        
    return (
        <Container className ={classes.rootCont}>
                <Typography variant="subtitle2"> Login to Notes App </Typography>
     
               
                <form onSubmit={handleSubmit} className={classes.rootDiv}>       
                   <InputForm
                        type = 'email'
                        name = 'email'
                        handleChange = {handleChange}
                        label = 'Email'
                        value = {email}
                        error = {emailError}
                        formValidate = {validate}
                        errorNull = {errorNull}
                        
                    /> 
                    <InputForm
                        type = 'password'
                        name = 'password'
                        handleChange = {handleChange}
                        label = 'Password'
                        value = {password}
                        error = {passwordError}
                        formValidate = {validate}
                        errorNull = {errorNull}
                    /> 
                    {authErr ? <span style = {{ color : 'red' , margin : '0 0 0 4px', fontStyle : 'italic'}}>{authErr}</span> : null}

                    <Button fullWidth variant="contained" type="submit" style={{backgroundColor:'#95c436' , color : 'white'}} >Login in</Button>
                </form>
                    
                    <Typography variant="subtitle2" style={{padding : '10px 0px'}} >
                        New to Notes App ?  
                        <a style={{color : '#08adad' , cursor : 'pointer'}} onClick={() => {toggleSignin(false)}}>  Register Yourself
                        </a> 
                    </Typography>
               
            
        </Container>
    )
    }



export default  (SignIn);