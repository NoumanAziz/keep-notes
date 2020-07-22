import React, { useState, useRef, useEffect } from "react";
import { Modal, Backdrop, Button, InputBase, Box, IconButton } from "@material-ui/core";
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring/web.cjs';
import notesStyles from "./notesStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import { PinFilled, PinUnfilled } from "../../pinIcons/PinIcon";
import { useDispatch } from "react-redux";
import { createNotes, updateNote } from "../../../redux/notes/notesfirestoreActions";
import NotesCardColorMenu from "./NotesCardColorMenu";
import clsx from  'clsx';

const AddNotesModal = ({open , closeModal, noteTitle , noteDiscrp, notePinned , noteBgColor , update ,id , ...props}) => {

  const [note , setNote] = useState({
                                  title : noteTitle ? noteTitle : ''  ,
                                  discrp : noteDiscrp ? noteDiscrp : '',
                                  })

  const [pinned , setPinned] = useState(notePinned ? notePinned : false);

  const [bgColor , setBgColor] = useState( noteBgColor ? noteBgColor : 'bgDeafult' )

  const {title , discrp} = note;
  
  const dispatch = useDispatch();



  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const preOpen = usePrevious(open);

  useEffect(() => {
    // If it is now open, but was previously not open
    if (open && !preOpen) {
      // Reset items here
      setNote({
        title : noteTitle,
        discrp :noteDiscrp
      })
      setPinned(notePinned)
      setBgColor(noteBgColor)
      
    }
  }, [open, preOpen]);




  const handleSubmit = (event) => {
      
    event.preventDefault();


    if(  title || discrp)  {

            if (update) {

                  if( title!==noteTitle || discrp!==noteDiscrp || pinned!==notePinned || bgColor!==noteBgColor) {
                    
                          let obj = {};

                          if (title!==noteTitle)  { obj['title'] =title }

                          if (discrp!==noteDiscrp)  { obj['discrp'] =discrp }

                          if (pinned!==notePinned)  { obj['pinned'] =pinned } 

                          if (bgColor!==noteBgColor)  { obj['bgColor'] =bgColor } 

                          dispatch(updateNote(id , obj))
                          console.log('need to update ' , obj )
                  }

            }
            
            else {

                  dispatch(createNotes({title ,
                                        discrp ,
                                        pinned,
                                        bgColor,
                                      }))

            }
    }  


  }




  const handleChange = (event) => {
    
      const{name, value} = event.target;
          setNote({
              ...note,
              [name] : value
          })
          console.log ('valueee' ,name , value)
  }

  const onClose = (e) =>{
    handleSubmit(e);
   
      closeModal() ;
  }


  
  const [colorAnchorEl, setColorAnchorEl] = useState(null);


  const isColorMenuOpen = Boolean(colorAnchorEl);

  const handleColorMenuOpen = (event) => {
   
    setColorAnchorEl(event.currentTarget);
    
  };
  

  const handleColorMenuClose = () => {
    setColorAnchorEl(null);
  };

  const handleBgColor = (color) => {
    setBgColor(color)
  }

 
  const classes = notesStyles();

  return (

    <Modal
      className={classes.modal}
      open = {open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      // hideBackdrop
     
      
      disableEnforceFocus
      BackdropProps={{
        timeout: 500,
        invisible : true
      }}
    >
     


     
      <div    className= {clsx(classes.modalPaper, classes[bgColor])}>
        <Box
          className={classes.modalTitleBox}
          boxShadow={3}
          bgcolor="#00000000"
          m={0}
          p={0}
        >
          <InputBase
            className={classes.modalTitleInput}
            fullWidth
            multiline
            size="small"
            placeholder="Title"
            inputProps={{ "aria-label": "Take a note" }}
            name = 'title'
            value = {title}
            
            onChange = {handleChange}
          />
          {pinned ? 
          <IconButton aria-label="settings" onClick = {()=>setPinned(false)} >
            <PinFilled  /> 
          </IconButton>
          :
          <IconButton aria-label="settings"  onClick = {()=>setPinned(true)}> 
            <PinUnfilled />
          </IconButton>
           }

        </Box>

        <div className={classes.surDisp} >
          <InputBase
            className={classes.surDispInput}
            placeholder="Take a note..."
            inputProps={{ "aria-label": "naked" }}
            autoFocus = {!update}
            fullWidth
            multiline
            rowsMin = '8'
            name = 'discrp'
            value = {discrp}
            onChange = {handleChange}
          />
        </div>
          
          <div className = {classes.modalControlButtons}>
          <IconButton aria-label="settings"  onClick = {handleColorMenuOpen} onMouseEnter = {handleColorMenuOpen} onMouseLeave = {handleColorMenuClose} >
            <ColorLensIcon fontSize = 'small' />  
            <NotesCardColorMenu isColorMenuOpen = {isColorMenuOpen} colorAnchorEl = {colorAnchorEl} handleColorMenuClose = {handleColorMenuClose}  handleBgColor = {handleBgColor} modal = {true}/>
          </IconButton>
          
          { update &&
          <IconButton aria-label="settings">
            <DeleteIcon fontSize = 'small' />
          </IconButton> }

          {update ? 
            <Button size = 'small' onClick = {onClose} className={classes.cancelBtn}>
                Update
            </Button>
          :

          <Button size = 'small' onClick = {onClose} className={classes.cancelBtn}>
               Save
          </Button>
          }
        
          <Button size = 'small' onClick = {closeModal} className={classes.cancelBtn}>
            Close
          </Button>
          </div>
         
      </div>
  
    </Modal>
  );
};

export default AddNotesModal;






                // setNote({
                //   title : '',
                //   discrp : ''
                // })
                // setPinned('false')
                // setBgColor('bgDefault')




                // title!==noteTitle && dispatch(updateNote(id , {title : title}))

                // discrp!==noteDiscrp && dispatch(updateNote(id , {discrp}))

                // pinned!==notePinned && dispatch(updateNote(id , {pinned}))

                // bgColor!==noteBgColor && dispatch(updateNote(id , {bgColor}))