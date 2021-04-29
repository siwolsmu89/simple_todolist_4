import {
    REFRESH_FILTER
} from "../actions/filterActions";

export default function filters(state, action) {
    const { filters } = state;
    switch (action.type) {
        case REFRESH_FILTER:
            return action.filters;
        default:
            return filters;
    }
}