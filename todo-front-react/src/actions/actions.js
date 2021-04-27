import axios from "axios";

export const ADD_TODO = 'ADD_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const GET_TODO = 'GET_TODO';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const SELECT_COLOR = 'SELECT_COLOR';

export function addTodoAction(id, text, colorValue) {
    axios({
        url: 'todo/add.do',
        method: 'post',
        dataType: 'json',
        data: { id, text, colorValue }
    });

    return { type: ADD_TODO, id, text, colorValue }
}

export function checkTodoAction(id) {
    axios({
        url: 'todo/check.do',
        method: 'post',
        dataType: 'json',
        data: { id }
    });

    return { type: CHECK_TODO, id }
}

export function removeTodoAction(id) {
    return { type: REMOVE_TODO, id }
}

export function getTodoAction() {
    return { type: GET_TODO }
}

export function receiveTodoAction(todos) {
    return { type: RECEIVE_TODO, todos }
}

export function selectColorAction(colorValue) {
    return { type: SELECT_COLOR, colorValue }
}

export function fetchTodos() {
    return function (dispatch) {
        dispatch(getTodoAction());
        return axios.get('todo/getList.do').then(response => dispatch(receiveTodoAction(response.data)));
    }
}

export function removeTodos(id) {
    return function (dispatch) {
        return axios({
            url: 'todo/remove.do',
            method: 'post',
            dataType: 'json',
            data: { id }
        }).then(dispatch(removeTodoAction(id)));
    }
}