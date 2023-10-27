import apis from '../services/apis';
// import history from '../history';

export const actionLogin = () => async (dispatch) => {
    const response = await apis.get('/aryanAPI');
    if (response) {
        dispatch({ type: 'LOGIN' });
        // history.push('/AddBook');
    }
}

export const actionAddBook = (formValues) => {
    return async (dispatch) => {
        const response = await apis.post('/aryanAPI', formValues);
        if (response) {
            dispatch({ type: 'ADD_BOOK' });
            // history.push('Display');
        }
    }
}

export const displayBooks = () => {
    return async (dispatch) => {
        const response = await apis.get('/books');
        if (response) {
            // console.log("res in action", response)
            dispatch({ type: 'DISPLAY_BOOKS', payload: response.data })
        }
        return response
    }
}

export const editBook = (id, formValues) => {
    return async (dispatch) => {
        const response1 = await apis.put(`/aryanAPI/${id}`, formValues);
        const response = await apis.get('/aryanAPI');
        dispatch({ type: 'EDIT_BOOK', payload: response.data })
        // history.push('/Display');
    }
}
export const deletebook = (id) => async (dispatch) => {
    const response1 = await apis.delete(`/aryanAPI/${id}`);
    const response = await apis.get('/aryanAPI');
    dispatch({ type: 'DELETE_BOOK', payload: response.data })
    // history.push('/Display');
}
