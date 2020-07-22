import React, { useState } from 'react';
import { InputBase, Box, Typography } from '@material-ui/core';
import AddNotesModal from './AddNotesModal';
import notesStyles from './notesStyles';


const AddNotesBox = () => {

  const [open , setOpen] = useState(false)

  const openModal = () =>{
    setOpen(true)
  }

  const closeModal = ()=>{
    setOpen(false)
  }

  const classes = notesStyles();

  return (
    <>
      <Box    onClick = {openModal}
              className={classes.takeNotesBox}
              boxShadow={5}
              bgcolor="#00000000"
              m={0}
              p={0}
      >
        {/* <InputBase  onClick = {openModal}
                    className = {classes.takeNote}
                    size = 'small'
                    //placeholder="Take a note..."
                    inputProps={{ 'aria-label': 'Take a note' }}
                    value = 'Take a note...'
        /> */}
        
        
                    <span> Take a note...</span>
                        

      </Box>

      <AddNotesModal closeModal = {closeModal} open = {open}  
                  noteTitle = ''  noteDiscrp = ''  notePinned = {false} noteBgColor = 'bgDefault' update = {false} />

    </>
  );
}


export default AddNotesBox;