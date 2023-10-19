import { combineReducers } from 'redux';
import BooksDataReducer from './BooksDataReducer';
// import { reducer as formReducer } from 'redux-form';

const initialState = {
    login: 'FAIL'
};
const bookReducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            login: 'SUCCESS'
        };
    }
    if (action.type === 'ADD_BOOKS') {
        const p = action.payload;
        return {
            ...state,
            p
        };
    }
    if(action.type === 'DISPLAY_BOOKS'){
        const p = action.payload;
        return {
            ...state,
            p
        };
    }
    if(action.type==='EDIT_BOOK'){
        const p = action.payload;
        return {
            ...state,
            p
        };
    }
    if(action.type==='DELETE_BOOK'){
        const p=action.payload;
        return{
            ...state,
            p
        }
    }
    return state;
}      
export default combineReducers({                                            
    // form: formReducer,
    // bookReducer
    BooksDataReducer:BooksDataReducer
});