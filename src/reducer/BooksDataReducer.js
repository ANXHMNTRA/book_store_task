const state = {}




const BooksDataReducer = (initialState = state, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case 'DISPLAY_BOOKS':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default BooksDataReducer