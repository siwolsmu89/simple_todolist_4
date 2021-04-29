export const SELECT_COLOR = 'SELECT_COLOR';

export function selectColorAction(colorValue) {
    return { type: SELECT_COLOR, colorValue }
}