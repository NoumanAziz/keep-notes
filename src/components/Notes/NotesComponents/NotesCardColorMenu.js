import React from 'react';
import { Popper, Paper, ClickAwayListener } from '@material-ui/core';
import notesStyles from './notesStyles';

const NotesCardColorMenu = ({isColorMenuOpen , colorAnchorEl , handleColorMenuClose , handleBgColor , modal}) => {
    const classes = notesStyles();
    return (
            <Popper open={isColorMenuOpen} anchorEl={colorAnchorEl} role={undefined} transition disablePortal  >
                      {
                      ({ TransitionProps, placement }) => (
            
                    <Paper 
                                style = {{                                
                                    transform:  modal ? 'translateX(-108%) translateY(-76%)' : 'translateX(-100%) translateY(-121%)',

                                    position : "fixed",

                                    }}
                    >
            
                        <ClickAwayListener onClickAway={handleColorMenuClose}>
            
                            <div id="menu-list-grow" className = {classes.colorMenuRoot} >

                                
                                        
                                        <div  onClick = {()=>handleBgColor("bgDefault")}
                                            className={classes.colorsDefault}></div>
                              
                                        <div  onClick = {()=>handleBgColor('bgRed')}
                                            className={classes.colorsRed}></div>

                                         <div  onClick = {()=>handleBgColor('bgYellow')}
                                            className={classes.colorsYellow}></div>
                                        
                                        <div  onClick = {()=>handleBgColor('bgGreen')}
                                            className={classes.colorsGreen}></div>
                                        
                                         <div  onClick = {()=>handleBgColor('bgTeel')}
                                            className={classes.colorsTeel}></div>
                                        
                                         <div  onClick = {()=>handleBgColor('bgBlue')}
                                            className={classes.colorsBlue}></div>
          
                                        <div  onClick = {()=>handleBgColor('bgDarkblue')}
                                            className={classes.colorsDarkblue}></div>
          
                                         <div  onClick = {()=>handleBgColor('bgPurple')}
                                            className={classes.colorsPurple}></div>
          
                                         <div  onClick = {()=>handleBgColor('bgPink')}
                                            className={classes.colorsPink}></div>
    
                                        <div  onClick = {()=>handleBgColor('bgGrey')}
                                            className={classes.colorsGrey}></div>

                            </div>
                        </ClickAwayListener>
                    </Paper>
                
                )
                }
            </Popper>
              
            
            
    );
};

export default NotesCardColorMenu;





