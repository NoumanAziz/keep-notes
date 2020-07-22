
const iState = {
    currentTheme : 'dark'
};

const themeReducer = (state = iState , action) => {
    switch (action.type) {
        case 'THEME_TOGGLER':
            return {
                ...state,
                currentTheme : state.currentTheme == 'dark' ? 'light' : 'dark'
            }
    
        default:
            return state ;
    }
}


export default themeReducer ;