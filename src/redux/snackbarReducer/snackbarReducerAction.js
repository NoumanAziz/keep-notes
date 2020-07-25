import { snackbarReducerActionType } from "./snackbarReducerActionType";






export const openSnackbar = (msg) => ({
        type : snackbarReducerActionType.OPEN_SNACKBAR,
        payload : msg
})


export const closeSnackbar = () => ({
    type : snackbarReducerActionType.CLOSE_SNACKBAR,
    
})