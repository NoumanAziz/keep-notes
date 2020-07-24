import React from 'react';
import Masonry from 'react-masonry-css';
import NotesCard from '../NotesComponents/NotesCard';
import notesStyles from '../NotesComponents/notesStyles';
import { Button } from '@material-ui/core';
import { delfromNotes } from '../../../redux/notes/notesfirestoreActions';
import { useDispatch } from 'react-redux';

const TrashPage = ({notes , breakpointColumnsObj}) => {

    const dispatch = useDispatch();

    const deleteNote = () => {
      notes &&  notes.map(note => note.deleted &&  dispatch(delfromNotes(note))  )
    }

    const classes = notesStyles();
    return (
    <>
        <p className = {classes.trashText}> Notes in Trash are deleted after 7 days.  </p> 
        <Button size = 'small'  className={classes.cancelBtn}   onClick = { ()=>deleteNote() }>
                Empty Trash
            </Button>
           
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className= {classes.masonryGrid}
          columnClassName={classes.masonryGridColumn}>
        
              {notes && notes.map(note => note.deleted ? 
              <NotesCard key = {note.id} note = {note} trash = {true} /> : null
              )}

        </Masonry>
    </>
    );
};

export default TrashPage;


// dispatch(delfromNotes(note))