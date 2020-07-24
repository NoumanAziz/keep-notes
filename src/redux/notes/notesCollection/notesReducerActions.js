import { notesReducerActionTypes } from "./notesReducerActionTypes";

export const addNoteReducer = (note) =>({
    type : notesReducerActionTypes.ADD_NOTE,
    payload : note
})

export const updateNoteReducer = (id , update) =>({
    type : notesReducerActionTypes.ADD_NOTE,
    payload : update,
    payloadId : id
})


export const deleteNoteReducer = (id) =>({
    type : notesReducerActionTypes.ADD_NOTE,
    payload : id
})