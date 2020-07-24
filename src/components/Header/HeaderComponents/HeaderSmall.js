import React, {useState  } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { IconButton, MenuItem , Popper, Grow, Paper, ClickAwayListener, MenuList, Avatar  } from '@material-ui/core';
import {ExitToApp ,Brightness4 , Brightness7 } from '@material-ui/icons';
import { useStyles } from '../HeaderStyles';
import { isLoaded  , isEmpty} from 'react-redux-firebase'
import { signOut } from '../../../redux/authReducer/authAction';

  const HeaderSmall = ({setTheme}) => {

  const classes = useStyles();
 
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const darkTheme = useSelector(state=>state.theme.currentTheme);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


 
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const auth = useSelector (state => state.firebase.auth)
  const profile = useSelector (state => state.firebase.profile)
  const dispatch = useDispatch();

const renderMobileMenu = (


<Popper open={isMobileMenuOpen} anchorEl={mobileMoreAnchorEl} role={undefined} transition disablePortal   >
          {
          ({ TransitionProps, placement }) => (

            <Grow {...TransitionProps}  
                  style={{ 
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                         }}
            >

            <Paper 
                    style = {{
                            left: '50%',
                            transform: 'translateX(-27%) translateY(1%)',
                            
                            }}
            >

            <ClickAwayListener onClickAway={handleMobileMenuClose}>

            <MenuList autoFocusItem={isMobileMenuOpen} id="menu-list-grow" className = {classes.headerMenu}>
    
                {/* <MenuItem  className = {classes.menuFont}>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="primary-search-account-menu"
                      aria-haspopup="true"
                      color="inherit"
                    >
                    <Avatar alt={profile.name} src={profile.photoURL} className={classes.smaller} /> 
                    </IconButton>
                    {profile.name}
                  
                </MenuItem> */}
                 
   
                <MenuItem onClick={setTheme}  className = {classes.menuFont}>
                    <IconButton  color="inherit"   >
                            {darkTheme === 'dark' ? <Brightness7 className = {classes.smaller}/> : <Brightness4 className = {classes.small}/> } 
                    </IconButton>
                    {darkTheme === 'dark' ? <p>Ligth Mode</p>: <p>Dark Mode</p> } 
                </MenuItem>
    
     
               {/* <a className={classes.Links}  onClick = {()=>dispatch(signOut())} >  */}

                  <MenuItem  onClick = {()=> {handleMobileMenuClose() ; dispatch(signOut())}}  className = {classes.menuFont}  >
                      <IconButton 
                          color="inherit"
                        >
                          <ExitToApp className = {classes.smaller} />

                        </IconButton> 
                        <p>Logout</p>
                  
                  </MenuItem> 
              

              </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )
    }
</Popper>
  
  );


  
 
      return (
          <div>
             <div className={classes.sectionMobile}>
            {isLoaded(auth) && !isEmpty(auth) ?
             
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >

            <Avatar alt={profile.name} src={profile.photoURL} className={classes.med} /> 
              
            </IconButton>
         
          :
          <IconButton  color="inherit" onClick={setTheme} >
                            {darkTheme === 'dark' ? <Brightness7 /> : <Brightness4 /> } 
                    </IconButton>
          }

          {renderMobileMenu}
          </div>
          </div>
      );
  };
  
  export default HeaderSmall;



  // <MoreVert />