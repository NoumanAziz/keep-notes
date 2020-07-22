import React, {useState , useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useStyles } from '../HeaderStyles';
import { InputBase } from '@material-ui/core';
import {Search } from '@material-ui/icons';



const HeaderSearchbar = () => {
    const classes = useStyles();
    return (

         <div className={classes.search}>
             <div className={classes.sectionDesktop}>
          <div className={classes.searchIcon}>
            <Search />
            </div>
          </div>
          <InputBase 
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>    
    );
};

export default HeaderSearchbar;



     //              {/* {loggedIn === null || loggedIn == false || loggedIn == "Invalid Email or Password" || loggedIn == "User Already Resgistered"|| loggedIn == "User Resgistered Successfully" ?
        //  null
        //  :  */}