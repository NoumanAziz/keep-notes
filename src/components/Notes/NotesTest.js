import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import AddNotesBox from './NotesComponents/AddNotesBox';
import { Container} from '@material-ui/core';

import notesStyles from './NotesComponents/notesStyles';

import NotesCard from './NotesComponents/NotesCard';

import moment from 'moment';
import Masonry from 'react-masonry-css'
import { withRouter } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';




const Notes = ({match}) => {

    const userId = useSelector(state => state.firebase.auth.uid)
    const notesCollection = `users/${userId}/notes`
    const trashCollection = `users/${userId}/trash`

    useFirestoreConnect(() => [
        { collection: notesCollection , orderBy : ['createdAt' , 'desc']} 
      ])     

    const notes = useSelector(state => state.firestore.ordered[notesCollection] )
    const [param , SetParam] = useState ( match.params.category )
    console.log('setparams' , param)
    const [pinned , setPinned] = useState( match.params.category == 'pinned' ? true : false) 
    const [trash , setTrash] = useState( match.params.category == 'trash' ? true : false) 
    const [search , setSearch] = useState(match.params.category == 'search' ? true : false)




    useEffect(() => {
      console.log (match.params.category)
      if ( match.params.category == 'pinned') {
              setPinned(true)
              setTrash(false)
              setSearch(false)
      }
       
      if (match.params.category == 'trash') {
         setTrash(true)
         setPinned(false)
         setSearch(false)
      }
      if (match.params.category == 'notes') {
        setTrash(false)
        setPinned(false)
        setSearch(false)
     }

     if (match.params.category.includes('search') ) {
      setSearch(true)
    
   }

      }, [match.params.category])    

     
      const layout = useSelector(state=>state.mobLayout.layout)
      const breakpointColumnsObj = {
        default: 4,
        1130: 3,
        855: 2,
        600: layout ? 1 : 2,
  
      };
  


    const classes = notesStyles();
    return (
        <div className = {classes.notesRootTop}>
       
       <Container className = {classes.notesRoot}>
         {! search ?
            <> 
              { trash ? 
                  <>
                  <span className = {classes.trashText}> Notes in Trash are deleted after 7 days.  </span> <span className = {classes.emptyTrash}>Empty Trash</span>
           
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className= {classes.masonryGrid}
                    columnClassName={classes.masonryGridColumn}>
                  
                        {notes && notes.map(note => note.deleted ? 
                        <NotesCard key = {note.id} note = {note} trash = {true} /> : null
                        )}

                  </Masonry>

                  </>
                :
                <>
                <AddNotesBox />
                  {pinned ? 
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className= {classes.masonryGrid}
                    columnClassName={classes.masonryGridColumn}>
                  
                        {notes && notes.map(note => note.pinned && !note.deleted  ? 
                        <NotesCard key = {note.id} note = {note} trash = {false} /> : null
                        )}

                  </Masonry>
                  :
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className= {classes.masonryGrid}
                    columnClassName={classes.masonryGridColumn}>
                  
                        {notes && notes.map(note => note.deleted ? null :
                        <NotesCard key = {note.id} note = {note} trash = {false}/>
                        )}

                  </Masonry>
                  }
                </>
              }
            </>

              : 

              <SearchPage notes = {notes} breakpointColumnsObj = {breakpointColumnsObj}/>

              }
         
    
            
       </Container>
       </div>
    );
};

export default withRouter(Notes);





 // const firestoreNotes = useSelector(state => state.firestore.ordered[notesCollection] )
    // // const notes = useSelector(state => notes.notesCollection)
   
    // // console.log('comparing and filtering ', newNote)

    // useEffect(()=>{
    //     console.log('change in notes')
        
       
    //     dispatch(addNoteReducer(firestoreNotes))
    // }, [firestoreNotes] )
    
    
    // useEffect(()=>{
    //     console.log('change in Trash notes notes')
    // }, [firestoreTrashNotes] )
    
    