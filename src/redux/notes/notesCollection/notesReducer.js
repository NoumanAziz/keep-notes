import { notesReducerActionTypes } from "./notesReducerActionTypes";

const ISTATE = {
    notesCollection : []
}

const notesReducer = (state = ISTATE , action)=>{
    switch (action.type) {
        case notesReducerActionTypes.ADD_NOTE :
            return {
               
                notesCollection : action.payload 
            };

        case notesReducerActionTypes.UPDATE_NOTE :
            return {
               
                notesCollection : state.notesCollection.map(note => note.id == action.payloadId ? {...note , ...action.payload} : note )
            };
        
        case notesReducerActionTypes.DELETE_NOTE :
            return {
               
                notesCollection : state.notesCollection.filter(note=> note.id !== action.payload)
            };

        default:
            return state;
    }

}

export default notesReducer;