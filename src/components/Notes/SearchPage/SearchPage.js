import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import NotesCard from '../NotesComponents/NotesCard';
import notesStyles from '../NotesComponents/notesStyles';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';

const SearchPage = ({ notes , breakpointColumnsObj  , match  }) => {
    
    let search = match.params.category.toLowerCase().substring(6)
    // let rand = match.params.category.length * Math.random()

    let colorObj  = {} 
    notes&& notes.map(note =>   !note.deleted &&  (colorObj[note.bgColor] = colorObj[note.bgColor] ? [note , ...colorObj[note.bgColor]] : [note] )   )

    const [colorSearch , setColorSearch] = useState('')
    useEffect(()=>{
        setColorSearch('')
     }, [match.params.category] )

     var filtered = null;
     if(search){
      filtered =  notes && notes.filter(note =>  !note.deleted && note.title.toLowerCase().includes(search) || note.discrp.toLowerCase().includes(search) )
    }

    console.log('filtered arry', filtered)


    const classes = notesStyles();
    return (
        <>
        
        {(!search && !colorSearch) &&
        <>
        <p>Type to Search your notes </p>
        <span>- - or - -</span>
        </>
        }

        {(filtered && !filtered.length ) && !colorSearch ?
            
            <p>No matching results.</p>:null}

        {  !search || (filtered && !filtered.length )  ?
            <>
                     {(Object.keys(colorObj).length > 1) ?

                    <Paper elevation = {3} className = {classes.searchPageColorPaper} >
                        <p className = {classes.colorText} >Colors</p>
                        <div className = {classes.colorsCircleBox}>

                                { Object.keys(colorObj) && Object.keys(colorObj).map((color , i) =>
                                                <div key = {i}  className = {clsx(classes.colorsCircle , classes[color])}  onClick = {()=>setColorSearch(color)}   > </div>
                                )}
                        </div>
                    </Paper>
                    :
                    <p>Try organizing your Notes in Colors</p>
                    }
                
                    {colorSearch &&
                    <Masonry
                         breakpointCols={breakpointColumnsObj}
                         className= {classes.masonryGrid}
                         columnClassName={classes.masonryGridColumn}>
                                       
                             {colorObj[colorSearch] && colorObj[colorSearch].map(note => 
                             <NotesCard key = {note.id} note = {note} trash = {false} /> 
                             )}
                         
                    </Masonry>
                    }
            
            </>

        :
            
            
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className= {classes.masonryGrid}
                columnClassName={classes.masonryGridColumn}>
                              
                    {notes && notes.map(note =>  !note.deleted && note.title.toLowerCase().includes(search) || note.discrp.toLowerCase().includes(search) &&
                    
                    <NotesCard key = {note.id} note = {note} trash = {false} /> 
               
                      )}
                
            </Masonry>
            
         }
         </>
    );
};

export default withRouter(SearchPage);










// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import notesStyles from '../NotesComponents/notesStyles';
// import { useSelector } from 'react-redux';
// import { Container } from '@material-ui/core';
// import Masonry from 'react-masonry-css';
// import NotesCard from '../NotesComponents/NotesCard';

// const SearchPage = ({match}) => {
    
//     console.log('match props', match)
    
//     const userId = useSelector(state => state.firebase.auth.uid)
    
//     const notesCollection = `users/${userId}/notes`

//     const notes = useSelector(state => state.firestore.ordered[notesCollection] )

//     const classes = notesStyles();

//     const layout = useSelector(state=>state.mobLayout.layout)
//     const breakpointColumnsObj = {
//       default: 4,
//       1130: 3,
//       855: 2,
//       600: layout ? 1 : 2,

//     };


    

//         return (

//                 <h1>Search</h1>

//         //     <div className = {classes.notesRootTop}>
           
//         //    <Container className = {classes.notesRoot}>
            
               
//         //               <Masonry
//         //                 breakpointCols={breakpointColumnsObj}
//         //                 className= {classes.masonryGrid}
//         //                 columnClassName={classes.masonryGridColumn}>
                      
//         //                     {notes && notes.map(note => 
//         //                     <NotesCard key = {note.id} note = {note} trash = {false} />
//         //                     )}
    
//         //               </Masonry>
    
                   
        
                
//         //    </Container>
//         //    </div>
//         );

// };

// export default withRouter(SearchPage);