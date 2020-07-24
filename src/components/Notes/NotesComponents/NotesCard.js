import React, { useState, useEffect } from 'react';
import AddNotesModal from './AddNotesModal';
import { Box, TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import clsx from  'clsx';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import notesStyles from './notesStyles';
import { PinFilled , PinUnfilled}  from '../../pinIcons/PinIcon';
import NotesCardColorMenu from './NotesCardColorMenu';
import { useDispatch } from 'react-redux';
import { delfromNotes, updateNote, restore } from '../../../redux/notes/notesfirestoreActions';



const NotesCard = ({trash , note}) => {

  const dispatch = useDispatch();

  const {title , discrp ,id } = note;
 

  const classes = notesStyles();
  const [open , setOpen] = useState(false)
  const [pinned , setPinned] = useState(note.pinned);
  const [bgColor , setBgColor] = useState(note.bgColor)

  useEffect(() => {
    setBgColor(note.bgColor)
  }, [note.bgColor])

  useEffect(() => {
    setPinned(note.pinned)
  }, [note.pinned])


  const openModal = () =>{
   !trash && setOpen(true)
  }

  const closeModal = ()=>{
    setOpen(false)
  }


  const [colorAnchorEl, setColorAnchorEl] = useState(null);


  const isColorMenuOpen = Boolean(colorAnchorEl);

  const handleColorMenuOpen = (event) => {

    setColorAnchorEl(event.currentTarget);
  };
  

  const handleColorMenuClose = () => {
    setColorAnchorEl(null);
  };



  const [mobColorAnchorEl, setMobColorAnchorEl] = useState(null);


  const isMobColorMenuOpen = Boolean(mobColorAnchorEl);

  const handleMobColorMenuOpen = (event) => {

    setMobColorAnchorEl(event.currentTarget);
  };
  

  const handleMobColorMenuClose = () => {
    setMobColorAnchorEl(null);
  };



 const handleBgColor = (color) => {
   setBgColor(color)
   dispatch(updateNote(id , {'bgColor' : color} ))
 }


  return (
    <>
    <Box   
            className = {clsx(classes.notesCardBox, classes[bgColor])}
            boxShadow={5}
            bgcolor="#00000000"
            m={1}
            p= {1}
            
      >
          {!trash &&
                <div className = {classes.carPin}  >
                {pinned ? 

                
                <IconButton aria-label="settings" onClick = {()=>{ setPinned(false) ; dispatch(updateNote(id , {'pinned' : false})) }} className = {classes.carPinIcon}>
                  <PinFilled  /> 
                </IconButton>
              
                :
                
                <IconButton aria-label="settings"  onClick = {()=>{setPinned(true) ; dispatch(updateNote(id , {'pinned' : true} )) }} className = {classes.carPinIcon} > 
                  <PinUnfilled />
                </IconButton>
                }
                </div>
              }

        <div onClick = {openModal} className = {classes.modalOpenDiv} >
   
        {title.length ? 

           <Typography variant="body2" component="h3"   className = {classes.cardTitle}>
                            {title.length >60 ? `${title.substring(0,57)} ...` :  title} 
                        </Typography>
          // <TextareaAutosize 
          // readonly 
          // disabled
          // className={classes.titleAreaNote}
          // value = {title.length > 60 ? `${title.substring(0,58)} ...` : title}
          // />
               : null }

        {discrp.length ? 
                    <TextareaAutosize 
                   
                    disabled
                    className={classes.textAreaNote}
                    value = {discrp.length > 277 ? `${discrp.substring(0,274)} ...` : discrp}
                    />
         : null }
  
        </div>
            
                {trash ?
                          <div className = {classes.notesCardButtons}>
                            <div className = {classes.extraCardDiv} onClick = {openModal}></div>

                            {/* <IconButton aria-label="settings"   className = {classes.cardIconButton} onClick = {()=>{ dispatch(deleteNotes(id)) ; dispatch(restore(note))}}> */}
                            <IconButton aria-label="settings"   className = {classes.cardIconButton} onClick = {()=>dispatch(updateNote(id , {deleted : false , createdAt : new Date () ,  editedAt : new Date()}))}>
                              <RestoreFromTrashIcon fontSize = 'small' />  
                            </IconButton>
                              
                            {/* <IconButton aria-label="settings" className = {classes.cardIconButton} onClick = {()=> dispatch(deleteNotes(id))} > */}
                            <IconButton aria-label="settings" className = {classes.cardIconButton} onClick = {()=> dispatch(delfromNotes(note))} >
                              <DeleteForeverIcon fontSize = 'small'/>
                            </IconButton>

                         </div>
                : 
                          <div className = {classes.notesCardButtons}>
                            <div className = {classes.extraCardDiv} onClick = {openModal}></div>

                            <IconButton aria-label="settings"   onMouseEnter = {handleColorMenuOpen} className = {classes.cardIconButtonColor} onMouseLeave = {handleColorMenuClose} >
                              <ColorLensIcon fontSize = 'small' />  
                              <NotesCardColorMenu isColorMenuOpen = {isColorMenuOpen} colorAnchorEl = {colorAnchorEl} handleBgColor = {handleBgColor} handleColorMenuClose = {handleColorMenuClose} />
                            </IconButton>

                            <IconButton aria-label="settings"  onClick = {handleMobColorMenuOpen} className = {classes.cardIconButtonColorMob} >
                              <ColorLensIcon fontSize = 'small'  />  
                            </IconButton>
                              
                            {/* <IconButton aria-label="settings" className = {classes.cardIconButton} onClick = {()=>{ dispatch(delfromNotes(note)) ; dispatch(addTrash(note)) }} > */}
                           
                            <IconButton aria-label="settings" className = {classes.cardIconButton} onClick = { ()=>dispatch(updateNote(id , {deleted : true})) } >
                              <DeleteIcon fontSize = 'small'/>
                            </IconButton>
                          </div>
                }
             
              
            
       

      </Box>
      <NotesCardColorMenu isColorMenuOpen = {isMobColorMenuOpen} colorAnchorEl = {mobColorAnchorEl} handleBgColor = {handleBgColor} handleColorMenuClose = {handleMobColorMenuClose} />

  
    <AddNotesModal closeModal = {closeModal} open = {open}  
                id = {id}  noteTitle = {title}  noteDiscrp = {discrp}  notePinned = {pinned} noteBgColor = {bgColor} update = {true} />
    </>
  );
}


export default NotesCard;
