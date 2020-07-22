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
import { Link } from 'react-router-dom';





const HeaderSideDrawer = ({open , handleDrawerClose ,mouseOpen, handleMouseDrawerOpen , handleMouseDrawerClose , history}) => {
    const classes = useStyles();

console.log('openn' , open)
console.log ('mouse ' , mouseOpen)

const drawerOpener = open || mouseOpen ? true : false
console.log('drawer open' , drawerOpener);

  return (
   
    
      <Drawer
      onMouseLeave = {handleMouseDrawerClose}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpener ,
          [classes.drawerClose]: !drawerOpener ,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpener ,
            [classes.drawerClose]: !drawerOpener ,
          }),
        }}
      >
        
        <IconButton  >
            <ChevronRightIcon fontSize = 'small' /> 
          </IconButton >
       
          <br/>
         
        <List onClick = {handleMouseDrawerClose} >

            <ListItem button  onClick = {()=>history.push('/')} >
                <ListItemIcon className = {classes.drawerListItem}  onMouseEnter = {handleMouseDrawerOpen} >
                  <NotesOutlinedIcon size = 'small' /> 
                </ListItemIcon>
            <ListItemText primary= 'Notes' /></ListItem>
           
            
            <ListItem button >
                <ListItemIcon className = {classes.drawerListItem}  onMouseEnter = {handleMouseDrawerOpen} >
                  <PinFilled /> 
                </ListItemIcon>
            <ListItemText primary= 'Pinned' /></ListItem>

           
            <ListItem button onClick = {()=>history.push('/trash')} >
                <ListItemIcon className = {classes.drawerListItem}  onMouseEnter = {handleMouseDrawerOpen} >
                  <DeleteSweepSharpIcon size = 'small' /> 
                </ListItemIcon>
            <ListItemText primary= 'Trash' /></ListItem>
           

        </List>
        
      </Drawer>
   
   
 
  );
}



export default HeaderSideDrawer;
