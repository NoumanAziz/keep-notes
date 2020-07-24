
const iState = {
    layout : true
};

const mobLayoutReducer = (state = iState , action) => {
    switch (action.type) {
        case 'LAYOUT_TOGGLER':
            return {
                ...state,
                layout : !state.layout  
            }
    
        default:
            return state ;
    }
}


export default mobLayoutReducer ;