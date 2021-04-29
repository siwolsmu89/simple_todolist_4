import {CHANGE_ORDER_CONDITION, TOGGLE_DISPLAY_FINISHED, TOGGLE_DISPLAY_REMOVED} from "../actions/filterActions";

export default function filters(state, action) {
    const { filters } = state;

    switch (action.type) {
        case TOGGLE_DISPLAY_FINISHED:
            return filters;
        case TOGGLE_DISPLAY_REMOVED:
            return filters;
        case CHANGE_ORDER_CONDITION:
            return filters;
        default:
            return filters;
    }
}