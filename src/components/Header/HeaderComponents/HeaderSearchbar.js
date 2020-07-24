import React, {useState } from 'react'
import { useStyles } from '../HeaderStyles';
import { InputBase } from '@material-ui/core';
import {Search } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';



const HeaderSearchbar = ({history}) => {
    const classes = useStyles();
    const [string , setString] = useState('')

const handleChange = (event) => {
  setString(event.target.value)
  event.persist()
  setTimeout(() => (
    history.push(`/search${event.target.value}`)
  ), 1000);

}



    return (

         <div className={classes.search}>
            
          <div className={classes.searchIcon}>
            <Search />
            </div>
          

            <InputBase onClick = {()=>history.push('/search')}
                placeholder="Search…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
             
            }}
            value = {string}
            name = 'string'
            onChange = {handleChange}
            autoComplete = "off"
            inputProps={{ 'aria-label': 'search' }}

          />
        </div>    
    );
};

export default withRouter(HeaderSearchbar);



     //              {/* {loggedIn === null || loggedIn == false || loggedIn == "Invalid Email or Password" || loggedIn == "User Already Resgistered"|| loggedIn == "User Resgistered Successfully" ?
        //  null
        //  :  */}