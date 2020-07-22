import React from 'react';
import AddNotesBox from './NotesComponents/AddNotesBox';
import { Container} from '@material-ui/core';
import NotesList from './NotesComponents/NotesList';
import notesStyles from './NotesComponents/notesStyles';




const Notes = () => {
    const classes = notesStyles();
    return (
        <div className = {classes.notesRootTop}>
       <Container className = {classes.notesRoot}>
          
            <AddNotesBox />
            <NotesList/>
            
       </Container>
       </div>
    );
};

export default Notes;