export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModalAction(todo) {
    return { type: OPEN_MODAL, todo }
}

export function closeModalAction() {
    return { type: CLOSE_MODAL }
}