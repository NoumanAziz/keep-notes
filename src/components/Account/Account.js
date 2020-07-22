import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Button, Typography, Container } from '@material-ui/core';
import { accountStyles } from './AccountStyles';
import { useDispatch } from 'react-redux';
import { googleSignin } from '../../redux/authReducer/authAction';
import { AccountCircle } from '@material-ui/icons';



const Account = () => {
    const [signin , setSignin] = useState(true);
    const toggleSignin = (toggle) =>{
        setSignin(toggle)
    }

    const dispatch = useDispatch();
    const classes = accountStyles();

    return (
        
      <Container className = {classes.accountContainer}>
          <div className={classes.accountDiv}>
        
            <img src="/my-notes.png" alt = 'app' className= {classes.notesLogo} />

            <Typography className = {classes.titleText} variant="h4" >Save your Notes</Typography>
            
            {signin ? 
            <SignIn toggleSignin = {toggleSignin} />:
            <SignUp toggleSignin = {toggleSignin} /> } 
           
            <Button  onClick={()=>dispatch(googleSignin())}
                    style={{color : localStorage.getItem('theme') == 'light' ? '#DC5246' : '#FCC344' , 
                            border :localStorage.getItem('theme') == 'light' ? '1px solid  #DC5246' : '1px solid  #FCC344' , 
                            marginRight : '10px'}}  
                    variant="outlined"  
                    startIcon={<AccountCircle />} 
            >
            Sign in with Google</Button>

        </div>
        </Container>
    )
};

export default Account