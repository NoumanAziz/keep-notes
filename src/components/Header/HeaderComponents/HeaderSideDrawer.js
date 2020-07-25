import React from 'react';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import NotesOutlinedIcon from '@material-ui/icons/NotesOutlined';
import DeleteSweepSharpIcon from '@material-ui/icons/DeleteSweepSharp';

import { useStyles } from '../HeaderStyles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { PinFilled } from '../../pinIcons/PinIcon';
import { Divider } from '@material-ui/core';






const HeaderSideDrawer = ({open , handleDrawerClose ,mouseOpen, handleMouseDrawerOpen , handleMouseDrawerClose , history}) => {
    const classes = useStyles();



const drawerOpener = open || mouseOpen ? true : false


  return (
   
    
      <Drawer
      style  = {{border : 'none'}}
      onMouseLeave = {handleMouseDrawerClose}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpener ,
          [classes.drawerClose]: !drawerOpener ,
        })}
        classes={{
          paper: clsx(   classes.drwaerBorder, {
            [classes.drawerOpen]: drawerOpener ,
            [classes.drawerClose]: !drawerOpener ,
          }),
        }}

       
      >
        
        <IconButton className = {classes.extraIcon}  >
            <ChevronRightIcon fontSize = 'small'  /> 
          </IconButton >
       
          <Divider/>
         
        <List onClick = {handleMouseDrawerClose} >

            <ListItem button  onClick = {()=>history.push('/notes')} onMouseEnter = {handleMouseDrawerOpen} >
                <ListItemIcon className = {classes.drawerListItem}  >
                  <NotesOutlinedIcon size = 'small' /> 
                </ListItemIcon>
            <ListItemText primary ={ <p className = {classes.listItemText}>Notes</p>  }  /></ListItem>
           
            
            <ListItem button  onClick = {()=>history.push('/pinned')} onMouseEnter = {handleMouseDrawerOpen}>
                <ListItemIcon className = {classes.drawerListItem}  >
                  <PinFilled /> 
                </ListItemIcon>
            <ListItemText primary ={ <p className = {classes.listItemText}>Pinned</p>  }  /></ListItem>

           
            <ListItem button onClick = {()=>history.push('/trash')} onMouseEnter = {handleMouseDrawerOpen} >
                <ListItemIcon className = {classes.drawerListItem} >
                  <DeleteSweepSharpIcon size = 'small' /> 
                </ListItemIcon>
            <ListItemText primary = {<p className = {classes.listItemText}>Trash</p>  }   /></ListItem>
           

        </List>
        
      </Drawer>
   
   
 
  );
}



export default HeaderSideDrawer;
