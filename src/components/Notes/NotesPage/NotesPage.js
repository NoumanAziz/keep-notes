import React from 'react';
import Masonry from 'react-masonry-css';
import NotesCard from '../NotesComponents/NotesCard';
import notesStyles from '../NotesComponents/notesStyles';
import { useSelector } from 'react-redux';

const NotesPage = () => {
    const classes = notesStyles();
    const userId = useSelector(state => state.firebase.auth.uid)

    const notesCollection = `users/${userId}/notes`

    const notes = useSelector(state => state.firestore.ordered[notesCollection] )
    const layout = useSelector(state=>state.mobLayout.layout)
    const breakpointColumnsObj = {
      default: 4,
      1130: 3,
      855: 2,
      600: layout ? 1 : 2,

    };
    return (
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className= {classes.masonryGrid}
        columnClassName={classes.masonryGridColumn}>
      
            {notes && notes.map(note => note.deleted ? null :
            <NotesCard key = {note.id} note = {note} trash = {false}/>
            )}

      </Masonry>
    );
};

export default NotesPage;