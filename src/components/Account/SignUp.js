import React, { useState, useEffect } from 'react'
import InputForm from './InputForm';
import { signUp } from '../../redux/authReducer/authAction';
import { useDispatch } from 'react-redux';
import { Container, Typography, Button } from '@material-ui/core';
import { formStyles } from './AccountStyles';



// import Styles from './AccountStyles';



const SignUp = ({toggleSignin}) => {
    
     
    const [form , setform] = useState({
       name : '',
        email : '',
        password : '',
        confirmPassword : '',
        photoURL: '',
        gender:'',

        nameError : '',
        emailError : '',
        passwordError : '',
        confirmPasswordError: '',

        validate : true,
    })
        
    const{name ,email ,password, confirmPassword ,photoURL, gender, nameError , emailError , passwordError ,confirmPasswordError } = form;
    const dispatch = useDispatch();
    

    const handleSubmit = (event) => {
      
    event.preventDefault();
    if( nameError || emailError || passwordError || confirmPasswordError){
        alert('invalid credentials')
    } else{
        switch (gender) {

            case 'male':
             setform({
                 ...form,
                 photoURL :'https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg'
                })
                break;

            case 'female':
             setform({ 
                 ...form,
                 photoURL:'https://2atstartup.com.au/wp-content/uploads/2019/05/girl-avatar.png'
                })
            break;

            default:
                break;

        }

    }


        
    
}
    useEffect (() => {

        dispatch(signUp(form))

    }, [photoURL])



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

    const validateConfirmPassword = (nameError, error, value) => {
        if(nameError){
            setform({
                ...form,
                confirmPasswordError : error
            })
        }else{
            value !== password &&  setform({
                                            ...form,
                                            confirmPasswordError : '*Passwords do not match'
                                            })
            }
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
            <Typography variant ="subtitle2"> Register to Notes App </Typography>
          
                <form onSubmit={handleSubmit} className ={classes.rootDiv}>
                    
                    <InputForm
                        type = 'text'
                        name = 'name'
                        handleChange = {handleChange}
                        label = 'Name'
                        value = {name}
                        error = {nameError}
                        formValidate = {validate}
                        errorNull = {errorNull}
                        autoFocus
                    /> 
                           
                    {/* <div className = {`${genderCheck? 'gender-error' : null } gender`} >            */}

                    <div className = {classes.gender} >  
                     <p >Gender : </p> 
                     <p>
                        <label>
                            <input  name="gender" value = 'male' type="radio" required  onChange = {handleChange}/>
                            <span> Male</span>
                        </label>
                    </p>
                    <p >
                        <label>
                            <input name="gender" type="radio"  value='female' required onChange = {handleChange}/>
                            <span> Female</span>
                        </label>
                    </p>
                    </div>
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
                    <InputForm
                        type = 'password'
                        name = 'confirmPassword'
                        handleChange = {handleChange}
                        label = 'Confirm Password'
                        value = {confirmPassword}
                        error = {confirmPasswordError}
                        formValidate = {validateConfirmPassword}
                        errorNull = {errorNull}
                    /> 

                    {/* <div>
                        <button onSubmit = {(e)=>this.handleSubmit(e)} className="btn pink lighten-1 z-depth-0">SignUp</button>
                    </div> */}

                    <Button fullWidth variant="contained" type="submit" style={{backgroundColor:'#08adad' , color : 'white'}} >Register Yourself</Button>

                    </form>
                    <Typography variant="subtitle2" style={{padding : '10px 0px'}} >Already Member?  <a onClick = {()=>toggleSignin(true)} style={{color : '#95c436' , cursor : 'pointer'}} >  Login Yourself</a> </Typography>


                
                
                </Container>
        )
    }


export default (SignUp);