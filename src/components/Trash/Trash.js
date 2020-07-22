import React from 'react';
import { Container, makeStyles} from '@material-ui/core';
import NotesList from '../Notes/NotesComponents/NotesList';





const Trash = () => {

    const trashStyles = makeStyles ((theme) => ({

        notesRootTop : {
            margin : theme.spacing(8 , 0 , 0 , 0),
            padding : theme.spacing(0),
            borderTop : theme.palette.background.cardBorder,
            width : '100%',
          
        },
        notesRoot : {
            margin : "0 auto",
            padding : theme.spacing(4 , 4 , 3 ,4),
            
            width : '95%',
          
        },
    }))

    const classes = trashStyles();
    return (
        <div className = {classes.notesRootTop}>
       <Container className = {classes.notesRoot}>
          
            
            <NotesList trash = {true}/>
            
       </Container>
       </div>
    );
};

export default Trash;