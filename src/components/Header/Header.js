import React, {useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import clsx from 'clsx';
import { CssBaseline , AppBar , Toolbar , IconButton , Typography,  ClickAwayListener  } from '@material-ui/core';
import {MenuOutlined} from '@material-ui/icons';

import { useStyles } from './HeaderStyles';
import HeaderSearchbar from './HeaderComponents/HeaderSearchbar';
import HeaderDesktop from './HeaderComponents/HeaderDesktop';
import HeaderSmall from './HeaderComponents/HeaderSmall';
import HeaderSideDrawer from './HeaderComponents/HeaderSideDrawer';
import { isLoaded  , isEmpty} from 'react-redux-firebase'

import notes from './HeaderComponents/notes.png';
import { themeToggler } from '../../redux/themeReducer/themeReducerActions';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';

const Header = (props) => {

    const auth = useSelector (state => state.firebase.auth)
    const dispatch = useDispatch();

    const classes = useStyles();

    const setTheme = () =>{
       
          dispatch(themeToggler())
    
      }

const [open, setOpen] = useState(false);

const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mouseOpen, setMouseOpen] = useState (false);
  const handleMouseDrawerOpen = () => {
      setMouseOpen(true);
    };
    const handleMouseDrawerClose = () => {
        setMouseOpen(false);
      };
  
    return(

<div className={classes.grow}>
         <CssBaseline/>
         
      <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>

            <Toolbar>
            
                {isLoaded(auth) && !isEmpty(auth) ?
                
                <ClickAwayListener onClickAway = {handleDrawerClose}>
                    <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="open drawer"
                    onClick={()=>handleDrawerOpen()} >
                        <MenuOutlined />
                    </IconButton> 
                </ClickAwayListener>
                : null}
                
                {/* <a href = '/' className = {classes.homeLink}> */}
                <Typography  onClick = {()=>props.history.push('/notes')}
                             className={ !isEmpty(auth) ? classes.title : classes.logoutTitle } variant="h6" noWrap>
                <img src = {notes} alt = {notes} width = '30px' height = '30px' />Notes </Typography>
                {/* </a> */}

                {isLoaded(auth) && !isEmpty(auth) ?
                <>
                <HeaderSearchbar/> 
                  <Layout/>
                  </>
                  : null }

                <div className={classes.grow} />

                <HeaderDesktop setTheme={setTheme} />
            
                <HeaderSmall setTheme = {setTheme}/>
    
            </Toolbar>
           
      </AppBar>
      {isLoaded(auth) && !isEmpty(auth) ?
      
      <HeaderSideDrawer open = {open}  handleDrawerClose = {handleDrawerClose} mouseOpen = {mouseOpen} 
      handleMouseDrawerClose={ handleMouseDrawerClose}  handleMouseDrawerOpen= { handleMouseDrawerOpen} {...props} />
    
      : null}
     
    </div>
    )
}

export default withRouter(Header) ;

