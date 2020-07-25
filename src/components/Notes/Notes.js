import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import AddNotesBox from './NotesComponents/AddNotesBox';
import { Container} from '@material-ui/core';

import notesStyles from './NotesComponents/notesStyles';


import moment from 'moment';

import { withRouter } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import NotesPage from './NotesPage/NotesPage';
import TrashPage from './TrashPage/TrashPage';
import PinnedPage from './PinnedPage/PinnedPage';




const Notes = ({match}) => {

    const userId = useSelector(state => state.firebase.auth.uid)
    const notesCollection = `users/${userId}/notes`


    useFirestoreConnect(() => [
        { collection: notesCollection , orderBy : ['createdAt' , 'desc']} 
      ])     

    const notes = useSelector(state => state.firestore.ordered[notesCollection] )
    const [param , SetParam] = useState ( match.params.category.substring(0,6) )
    
    const [pinned , setPinned] = useState( match.params.category === 'pinned' ? true : false) 
    const [trash , setTrash] = useState( match.params.category === 'trash' ? true : false) 
    const [search , setSearch] = useState(match.params.category === 'search' ? true : false)

    useEffect(()=>{
      SetParam(match.params.category.substring(0,6) )
    }, [match.params.category] )  


    useEffect(() => {
    
      if ( param === 'pinned') {
              setPinned(true)
              setTrash(false)
              setSearch(false)
      }
       
      if ( param === 'trash') {
         setTrash(true)
         setPinned(false)
         setSearch(false)
      }
      if (param === 'notes') {
        setTrash(false)
        setPinned(false)
        setSearch(false)
     }

     if (param === 'search' ) {
      setSearch(true)
    
   }

      }, [param])    

     
      const layout = useSelector(state=>state.mobLayout.layout)
      const breakpointColumnsObj = {
        default: 4,
        1130: 3,
        855: 2,
        600: layout ? 1 : 2,
  
      };
  
      let colorObj  = {}
    
      notes&& notes.map(note => {colorObj[note.bgColor] = colorObj[note.bgColor] ? [note , ...colorObj[note.bgColor]] : [note]  } )

    const classes = notesStyles();
    return (
      <div className = {classes.notesRootTop}>
        <Container className = {classes.notesRoot}>
         {! search ?
            <> 
              { trash ?
                <TrashPage  notes = {notes} breakpointColumnsObj = {breakpointColumnsObj} />
                :
                <>
                  <AddNotesBox  notes = {notes} breakpointColumnsObj = {breakpointColumnsObj}/>
                    {pinned ? 
                      <PinnedPage  notes = {notes} breakpointColumnsObj = {breakpointColumnsObj}/>
                    :
                      <NotesPage  notes = {notes} breakpointColumnsObj = {breakpointColumnsObj}/>
                    }
                </>
              }
            </>
          : 
            <SearchPage notes = {notes} breakpointColumnsObj = {breakpointColumnsObj} />
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
    
    