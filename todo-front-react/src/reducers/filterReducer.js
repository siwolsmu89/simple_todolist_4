import {
    TOGGLE_DISPLAY_FINISHED,
    TOGGLE_DISPLAY_REMOVED,
    CHANGE_ORDER_CONDITION,
    toggleDisplayFinishedTodoAction, toggleDisplayRemovedTodoAction, changeOrderConditionAction
} from "../actions/filterActions";

export default function filters(state, action) {
    const { isDisplayFinishedTodo, isDisplayRemovedTodo, orderCondition } = state.filters;

    switch (action.type) {
        case TOGGLE_DISPLAY_FINISHED:
            return toggleDisplayFinishedTodoAction(isDisplayFinishedTodo);
        case TOGGLE_DISPLAY_REMOVED:
            return toggleDisplayRemovedTodoAction(isDisplayRemovedTodo);
        case CHANGE_ORDER_CONDITION:
            return changeOrderConditionAction(orderCondition);
        default:
            return filters;
    }
}