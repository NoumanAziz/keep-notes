import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NotesCard from './NotesCard';
import notesStyles from './notesStyles';
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import moment from 'moment';
import Masonry from 'react-masonry-css'
import { withRouter } from 'react-router-dom';


const NotesList = ({match}) => {

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

    const [pinned , setPinned] = useState( match.params.category == 'pinned' ? true : false) 
    const [trash , setTrash] = useState( match.params.category == 'trash' ? true : false) 


    useEffect(() => {
      if ( match.params.category == 'pinned') {
              setPinned(true)
              setTrash(false)
      }
       
      if (match.params.category == 'trash') {
         setTrash(true)
         setPinned(false)
      }
      if (match.params.category == 'notes') {
        setTrash(false)
        setPinned(false)
     }

      }, [match.params.category])    
     


    return (
      <>
              { trash ? 
                  <>
                  
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className= {classes.masonryGrid}
                    columnClassName={classes.masonryGridColumn}>

                        {trashNotes && trashNotes.map(note =>
                        <NotesCard key = {note.id} note = {note} trash = {true}/>
                        )} 

                  </Masonry>
                  </>
                :
                <>
                  {pinned ? 
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className= {classes.masonryGrid}
                    columnClassName={classes.masonryGridColumn}>
                  
                        {notes && notes.map(note => note.pinned ? 
                        <NotesCard key = {note.id} note = {note} trash = {false} /> : null
                        )}

                  </Masonry>
                  :
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className= {classes.masonryGrid}
                    columnClassName={classes.masonryGridColumn}>
                  
                        {notes && notes.map(note =>
                        <NotesCard key = {note.id} note = {note} trash = {false}/>
                        )}

                  </Masonry>
                  }
                </>
              }
         
      </>
       
    );
};

export default withRouter(NotesList);





// console.log ('Date now ' , moment(Date.now()).format()) 
// console.log ('Date now ' , moment(Date.now()).fromNow())
// console.log ('Date now ' , moment("20200620", "YYYYMMDD").fromNow())

//    console.log('nowww' , Date.now())