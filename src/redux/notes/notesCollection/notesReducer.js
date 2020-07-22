
import { authActionType } from "./authActionType";

const ISTATE = {
    authErr : null
}

const notesReducer = (state = ISTATE , action)=>{
    switch (action.type) {
        case authActionType.LOGIN_SUCCESS :
            console.log('success')
            return {
                ...state,
                authErr : null
            }
  

        default:
            return state;
    }

}

export default notesReducer;