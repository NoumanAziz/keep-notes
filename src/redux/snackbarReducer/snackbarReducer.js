const { snackbarReducerActionType } = require("./snackbarReducerActionType");

const iState = {
    openSnackbar : false ,
    msgSnackbar : ''
}

const snackbarReducer = (state = iState , action) =>{
        switch (action.type) {
            case snackbarReducerActionType.OPEN_SNACKBAR:
                return {
                    
                    openSnackbar : true ,
                    msgSnackbar : action.payload
                }
            case snackbarReducerActionType.CLOSE_SNACKBAR:
                return{
                    openSnackbar : false ,
                    msgSnackbar : ''
                }
        
            default:
                return state;
        }
}

export default snackbarReducer;