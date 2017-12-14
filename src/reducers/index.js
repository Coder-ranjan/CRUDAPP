import * as types from "../constants";
import { combineReducers } from 'redux';

function fetch_BooksReducer(state = {
    isLoading: false,
    data: [],
    error: false
}, action = null){
    switch (action.type) {
        case types.RECV_ERROR:
            return {...state, isLoading: false, data: action.data, error: true};
        case types.RECV_DATA:
            return {...state, isLoading: false, data: action.data, error: false};
        case types.REQ_DATA:
            return {...state, isLoading: true, error: false};

        default:
            return state;
    }
}

let book = {
};

function crud_BooksReducer(state = {
    book: book,
    error: false,
    succesful: false
}, action = null){
    switch (action.type) {
        case types.RECV_ERROR:
            return {...state, book: action.data, error: true, succesful: false};
        case types.GET_BOOK:
            return {...state, book: action.data, error: false, succesful: true};
        case types.UPDATE_BOOK:
            return {...state, error: false, succesful: true};
        case types.SET_STATE_BOOK:
            return {...state, book: action.data, error: false, succesful: true};
        case types.DELETE_BOOK:
            return {...state, book: {}, error: false, succesful: true};
        case types.CREATE_BOOK:
            return {...state, book: {}, error: false, succesful: true};
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    fetch_Books: fetch_BooksReducer,
    crud_Books: crud_BooksReducer
});

export default rootReducer;
