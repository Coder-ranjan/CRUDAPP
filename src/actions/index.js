import axios from "axios";
import {browserHistory} from "react-router";
import * as types from "../constants";
const apiUrl = 'http://localhost:4000/books';

function requestData() {
    return {type: types.REQ_DATA}
}

function receiveData(json) {
    return{
        type: types.RECV_DATA,
        data: json
    }
}

function receiveError(json) {
    return {
        type: types.RECV_ERROR,
        data: json
    }
}

function createData() {
    return {
        type: types.CREATE_BOOK,
        data: null
    }
}

function getDataById(json) {
    return {
        type: types.GET_BOOK,
        data: json
    }
}

function updateData(json) {
    return {
        type: types.UPDATE_BOOK,
        data:json
    }
}

function reDirectToHome() {
    browserHistory.push("/");
}

function deleteBook(data){
    return {
        type:types.DELETE_BOOK,
        data:data
    }
}

export function fetchData() {
    return function(dispatch) {
        dispatch(requestData());
        return axios({
            url: apiUrl,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(receiveData(response.data));
            })
            .catch(function(response){
                dispatch(receiveError(response.data));})
    }
}

export function create(obj) {
    return function (dispatch) {
        return axios({
            headers: {
                "Content-Type": "application/json"
            },
            url: apiUrl,
            timeout: 20000,
            method: 'post',
            data: JSON.stringify(obj)
        })
            .then(function(response) {
                dispatch(createData());
                dispatch(reDirectToHome());
            })
            .catch(function(response){
                dispatch(receiveError(response.data));})
    }
}

export function fetchDataById(id){
    const url = apiUrl+'/'+id;
    return function(dispatch) {
        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(getDataById(response.data));
            })
            .catch(function(response){
                dispatch(receiveError(response.data));})
    }
}

export function setBookState(book){
    return {
        type: types.SET_STATE_BOOK,
        data: book
    }
}

export function update(obj) {
    const url = apiUrl+'/'+obj.id;
    return function(dispatch) {
        return axios({
            headers: {
                "Content-Type": "application/json"
            },
            url: url,
            timeout: 20000,
            method: 'put',
            data: JSON.stringify(obj)
        })
            .then(function(response) {
                dispatch(updateData(response.data));
                dispatch(reDirectToHome());
            })
            .catch(function(response){
                dispatch(receiveError(response.data));})
    }
}

export function deleteBookById(id){
    const url = apiUrl+'/'+id;
    return function(dispatch) {
        return axios({
            url: url,
            timeout: 20000,
            method: 'delete',
            responseType: 'json'
        })
            .then(function(response) {
                dispatch(deleteBook(response.data));
                dispatch(reDirectToHome());
            })
            .catch(function(response){
                dispatch(receiveError(response.data));})
    }
}

