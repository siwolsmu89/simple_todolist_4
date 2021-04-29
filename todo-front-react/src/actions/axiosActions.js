import axios from "axios";
import {fetchEndAction, fetchStartAction} from "./fetchingActions";
import {addTodoAction, checkTodoAction, receiveTodoAction, removeTodoAction} from "./todoActions";

export function getTodoList() {
    return function (dispatch) {
        dispatch(fetchStartAction());
        axios.get('todo/getList.do')
        .then(response => {
            setTimeout(() => {
                dispatch(receiveTodoAction(response.data));
                dispatch(fetchEndAction());
            }, 1500);
        });
    }
}

export function addTodo(id, text, colorValue) {
    return function (dispatch) {
        dispatch(addTodoAction(id, text, colorValue));
        axios({
            url: 'todo/add.do',
            method: 'post',
            dataType: 'json',
            data: { id, text, colorValue }
        });
    }
}

export function removeTodo(id) {
    return function (dispatch) {
        dispatch(removeTodoAction(id));
        axios({
            url: 'todo/remove.do',
            method: 'post',
            dataType: 'json',
            data: { id }
        })
    }
}

export function checkTodo(id) {
    return function (dispatch) {
        dispatch(checkTodoAction(id));
        axios({
            url: 'todo/check.do',
            method: 'post',
            dataType: 'json',
            data: { id }
        })
    }
}