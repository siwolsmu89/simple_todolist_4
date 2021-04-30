import colors from "./colorReducer";
import todos from "./todoReducer";
import fetching from "./fetchingReducer";
import filters from "./filterReducer";
import modalStates from "./modalReducer";

const initialState = {
    todos: [],
    colors: [
        { id: 0, colorValue: '#343a40', active: true },
        { id: 1, colorValue: '#f03e3e', active: false },
        { id: 2, colorValue: '#228ae6', active: false },
        { id: 3, colorValue: '#12b886', active: false }
    ],
    filters: {
        isDisplayFinishedTodo: false,
        isDisplayRemovedTodo: false,
        orderCondition: 'CREATED ASC'
    },
    fetching: { isFetching: false, lastUpdated: Date.now() },
    modalState: {
        todo: null
    }
}

export default function reducer(state = initialState, action) {
    return {
        todos: todos(state, action),
        colors: colors(state, action),
        filters: filters(state, action),
        fetching: fetching(state, action),
        modalState: modalStates(state, action)
    };
};