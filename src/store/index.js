import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "../reducers";

const createAppStore = composeWithDevTools(
    applyMiddleware(thunkMiddleware))(createStore);

export default function configureStore(initialState) {
    const store = createAppStore(reducer, initialState);
    return store;
};
