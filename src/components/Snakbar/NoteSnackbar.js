

import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { closeSnackbar } from '../../redux/snackbarReducer/snackbarReducerAction';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 

color : {
    color :  theme.palette.background.cardFontColor,
    backgroundColor :  theme.palette.background.barBackground,
    textAlign : 'center'
},



}));

export default function NoteSnackbar() {

    const open = useSelector(state => state.snackbar.openSnackbar)
    const msg =  useSelector(state => state.snackbar.msgSnackbar)
    const dispatch = useDispatch();




  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    dispatch(closeSnackbar());
   
  };


 const classes = useStyles();
  return (
    <div>
    
      <Snackbar
       classes = {{anchorOriginBottomLeft : classes.color }} 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        
        open={open}
        autoHideDuration={2300}
        onClose={handleClose}
        message={msg}
      />
    </div>
  );
}


