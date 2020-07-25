import { openSnackbar } from "../snackbarReducer/snackbarReducerAction";

export const createNotes = (note)=>{
    return (dispatch , getstate , { getFirebase })=>{
        const authorId = getstate().firebase.auth.uid;
        

        const firestore = getFirebase().firestore()
        firestore.doc(`users/${authorId}/notes/${note.id}`).set({
            ...note,
            deleted  : false,
            createdAt: new Date(),
            editedAt : new Date()
        })
        
        .then(()=>dispatch(openSnackbar('Note added')))
        .catch(err=>console.log('note not added error occured', err))
    }
}


export const delfromNotes = (note)=>{
    return (dispatch , getstate , { getFirebase })=>{
        const authorId = getstate().firebase.auth.uid;
        

        const firestore = getFirebase().firestore()
        firestore.doc(`users/${authorId}/notes/${note.id}`).delete()
            
        
        
        .then(()=>dispatch(openSnackbar('Note deleted')))
        .catch(err=>console.log('note not deleted from notes error occured', err))
    }
}


export const updateNote = (id , update , trash )=>{
    return (dispatch , getstate , { getFirebase })=>{
        const authorId = getstate().firebase.auth.uid;
        

        const firestore = getFirebase().firestore()
        firestore.doc(`users/${authorId}/notes/${id}`).update({
            ...update
        })
        
       
        
        .then(()=> {
            
            console.log('successfully updated')
            update.pinned === true  && dispatch(openSnackbar('Note pinned')) 
            trash === 'yes' && dispatch(openSnackbar('Note trashed')) 
            trash === 'restore' && dispatch(openSnackbar('Note restored')) 
                })

        .catch(err=>console.log('not updated', err))
    }
}



// export const addTrash = (note)=>{
//     return (dispatch , getstate , { getFirebase })=>{
//         const authorId = getstate().firebase.auth.uid;
        

//         const firestore = getFirebase().firestore()
//         firestore.doc(`users/${authorId}/trash/${note.id}`).set({
//             ...note,
//             editedAt: new Date()
//         })
        
       
        
//         .then(()=>console.log('successfully moved to trash'))
//         .catch(err=>console.log('note not moved to trash, error occured', err))
//     }
// }

// export const restore = (note)=>{
//     return (dispatch , getstate , { getFirebase })=>{
//         const authorId = getstate().firebase.auth.uid;
        

//         const firestore = getFirebase().firestore()
//         firestore.doc(`users/${authorId}/notes/${note.id}`).set({
//             ...note,
//             editedAt: new Date()
//         })
        
       
         
//         .then(()=>console.log('successfully restored to notes'))
//         .catch(err=>console.log('note not restored to trash, error occured', err))
//     }
// }




// export const deleteNotes = (noteId)=>{
//     return (dispatch , getstate , { getFirebase })=>{
//         const authorId = getstate().firebase.auth.uid;
        

//         const firestore = getFirebase().firestore()
//         firestore.doc(`users/${authorId}/trash/${noteId}`).delete()
            
        
        
//         .then(()=>console.log('successfully deleted note'))
//         .catch(err=>console.log('note not deleted error occured', err))
//     }
// }

