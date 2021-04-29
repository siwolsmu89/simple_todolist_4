import axios from "axios";
import {fetchEndAction, fetchStartAction} from "./fetchingActions";
import {addTodoAction, checkTodoAction, receiveTodoAction, removeTodoAction} from "./todoActions";
import {refreshFilterAction} from "./filterActions";

export function getTodoList(filters) {
    return function (dispatch) {
        dispatch(refreshFilterAction(filters));
        dispatch(fetchStartAction());
        axios({
            url: 'todo/getList.do',
            method: 'post',
            dataType: 'json',
            data: filters
        }).then(response => {
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
