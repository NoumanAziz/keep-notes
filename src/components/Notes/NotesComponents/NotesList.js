import React from 'react';
import { Grid } from '@material-ui/core';
import NotesCard from './NotesCard';
import notesStyles from './notesStyles';
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import moment from 'moment';
import Masonry from 'react-masonry-css'


const NotesList = ({trash}) => {

    const classes = notesStyles();
    const userId = useSelector(state => state.firebase.auth.uid)
    const notesCollection = `users/${userId}/notes`
    const trashCollection = `users/${userId}/trash`

    useFirestoreConnect(() => [
        { collection: notesCollection } ,
        { collection: trashCollection } 
      ])
     
    const notes = useSelector(state => state.firestore.ordered[notesCollection] )
    const trashNotes = useSelector(state => state.firestore.ordered[trashCollection] )
    

    const breakpointColumnsObj = {
      default: 4,
      1130: 3,
      860: 2,
      600: 1
    };



    return (
      <>
              { trash ? 
                
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className= {classes.masonryGrid}
                    columnClassName={classes.masonryGridColumn}>

                        {trashNotes && trashNotes.map(note =>
                        <NotesCard key = {note.id} note = {note} trash = {trash}/>
                        )} 

                  </Masonry>
                :
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className= {classes.masonryGrid}
                    columnClassName={classes.masonryGridColumn}>
                  
                        {notes && notes.map(note =>
                        <NotesCard key = {note.id} note = {note} trash = {trash}/>
                        )}

                  </Masonry>
              }
         
      </>
       
    );
};

export default NotesList;





// console.log ('Date now ' , moment(Date.now()).format()) 
// console.log ('Date now ' , moment(Date.now()).fromNow())
// console.log ('Date now ' , moment("20200620", "YYYYMMDD").fromNow())

//    console.log('nowww' , Date.now())