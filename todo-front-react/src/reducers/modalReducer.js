import {CLOSE_MODAL, OPEN_MODAL} from "../actions/modalActions";

export default function modalStates(state, action) {
    const { modalState } = state;

    switch (action.type) {
        case OPEN_MODAL:
            return ({
              todo: action.todo
            });
        case CLOSE_MODAL:
            return ({
                todo: null
            })
        default:
            return modalState;
    }
}