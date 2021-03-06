import React from 'react'
import { TextField, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import './inputForm.css'
import { loginSuccess } from '../../redux/authReducer/authAction';


const InputForm = ({error , type , handleChange , label , name , value, formValidate , errorNull, ...props}) =>{
  let nameError = `${name}Error`
  const dispatch = useDispatch();
const theme = useSelector(state => state.theme.currentTheme)
const validate  = (name ,value)=>{
        
    
        if (value == ''){
       formValidate(nameError , `*${name} must not be empty`);
        }

        if(value !== ''){
        formValidate(nameError , '');
            switch (name) {
                case 'email':
                   
                    const emailRegex = RegExp(
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      );
                    !(emailRegex.test(value)) && formValidate(nameError , "* invalid Email address")
                    break;
                case 'password':
                
                    const passwordRegex = RegExp(
                        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,32}$/
                      );
                     !(passwordRegex.test(value)) && formValidate(nameError , "* Password must contain a number, capital & a small letter (7-32 figures)")
                       
                    break
                case 'confirmPassword':
                    
              
                    formValidate('', 'passwords do not match',value )
                    break
                default:
                    break;
                
            }
        }
 

    }
  


  
    const useStylesReddit = makeStyles((theme) => ({
       
        root: {
        //   border: '1px solid #908989',
          overflow: 'hidden',
          borderRadius: 4,
         
        //   backgroundColor: '#fcfcfb',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          '&:hover': {
            backgroundColor: 'none',
            
          },
          '&$focused': {
           outline : 'none',
            border : 'none',
            // boxShadow: `${fade('#3b3b3b', 0.25)} 0 0 0 2px`,
        
          },
        
        },
        focused: {},
      }));
      
  
      
    const classes = useStylesReddit();
        return (
            <>
            <div className = {theme == 'dark' ? 'auto-form': '' } onClick = {()=>dispatch(loginSuccess())}>
                <TextField InputProps={{ classes}}
                label = {label}  
                type = {type} 
                name = {name} 
                value={value} 
                onChange ={handleChange} 
                onBlur={()=>validate(name , value)}
                error = {error ? true : false}
                helperText = {props.signup == 'true' && !error  ? '* combination of number, capital & a small letter (7-32 figures)' : error } 
                fullWidth  
                required
                variant= "outlined" 
                id= {`text Field${name} `}
                onFocus = {()=>errorNull(nameError)}
                {...props}
                />
            </div>
          <br/>
          </>
        );
}

export default InputForm;