import React from 'react';
import Masonry from 'react-masonry-css';
import NotesCard from '../NotesComponents/NotesCard';
import notesStyles from '../NotesComponents/notesStyles';

const PinnedPage = ({notes , breakpointColumnsObj}) => {
    const classes = notesStyles();
    return (
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className= {classes.masonryGrid}
        columnClassName={classes.masonryGridColumn}>
      
            {notes && notes.map(note => note.pinned && !note.deleted  ? 
            <NotesCard key = {note.id} note = {note} trash = {false} /> : null
            )}

      </Masonry>
    );
};

export default PinnedPage;