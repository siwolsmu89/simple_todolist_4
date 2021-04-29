import {FETCHING_END, FETCHING_START} from "../actions/fetchingActions";

export default function fetching(state, action) {
    const { fetching } = state;
    switch (action.type) {
        case FETCHING_START:
            return { isFetching: true, lastUpdated : action.lastUpdated };
        case FETCHING_END:
            return { isFetching: false, lastUpdated : action.lastUpdated };
        default:
            return fetching;
    }
}