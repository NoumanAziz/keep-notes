import React, {useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {  IconButton, MenuItem , Popper, Grow, Paper, ClickAwayListener, MenuList, Avatar  } from '@material-ui/core';
import {ExitToApp  , Brightness4 , Brightness7,  } from '@material-ui/icons';
import { useStyles } from '../HeaderStyles';
import { isLoaded  , isEmpty} from 'react-redux-firebase'
import { signOut } from '../../../redux/authReducer/authAction';

const HeaderDesktop = ({setTheme}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

  const darkTheme = useSelector(state=>state.theme.currentTheme);
 

    const isMenuOpen = Boolean(anchorEl);
  
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
  
  
    const handleMenuClose = () => {
      setAnchorEl(null);
  
    };
  
  
  const auth = useSelector (state => state.firebase.auth)
  const profile = useSelector (state => state.firebase.profile)
  const dispatch = useDispatch();

    const renderMenu = (
    <Popper open={isMenuOpen} anchorEl={anchorEl} role={undefined} transition disablePortal >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper 
                      style = {{
                                left: '50%',
                                transform: 'translateX(-22%) translateY(3%)',
                              }}
                >
                  <ClickAwayListener onClickAway={handleMenuClose}>
                    <MenuList autoFocusItem={isMenuOpen} id="menu-list-grow"  className = {classes.headerMenu}>
                            <MenuItem className = {classes.menuFont} >{profile.name}</MenuItem>
                    
                  
                    <MenuItem  onClick = {()=> {handleMenuClose() ; dispatch(signOut())}}  className = {classes.menuFont}>

                      <IconButton color="inherit">
                          <ExitToApp />
                      </IconButton>
                        Logout
                  </MenuItem> 
                

                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
  
  
    );
  
    return (
        <div>
        <div className={classes.sectionDesktop}>
        <IconButton  color="inherit" onClick={setTheme}>
             {darkTheme === 'dark' ? <Brightness7 /> : <Brightness4 /> } 
          </IconButton>

          {isLoaded(auth) && !isEmpty(auth) ?
                  <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                  >
                    <Avatar  classes = {{img : classes.small , root : classes.small}}    src={profile.photoURL}  alt={profile.name}  style = {{ width : '30px' , height : '30px' , borderRaduius : '50%'  }}/>
                    {/* <AccountCircle /> */}
                  </IconButton> 
            :  null}

        </div>
        {renderMenu}
        </div>

    );
};

export default HeaderDesktop;