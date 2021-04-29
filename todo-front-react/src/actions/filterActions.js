export const TOGGLE_DISPLAY_FINISHED = 'TOGGLE_DISPLAY_FINISHED';
export const TOGGLE_DISPLAY_REMOVED = 'TOGGLE_DISPLAY_REMOVED';
export const CHANGE_ORDER_CONDITION = 'CHANGE_ORDER_CONDITION';

export function toggleDisplayFinishedTodoAction(isDisplayFinishedTodo) {
    return { type: TOGGLE_DISPLAY_FINISHED, isDisplayFinishedTodo }
}

export function toggleDisplayRemovedTodoAction(isDisplayRemovedTodo) {
    return { type: TOGGLE_DISPLAY_REMOVED, isDisplayRemovedTodo }
}

export function changeOrderConditionAction(orderCondition) {
    return { type: CHANGE_ORDER_CONDITION, orderCondition }
}