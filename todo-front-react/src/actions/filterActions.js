export const REFRESH_FILTER = 'REFRESH_FILTER';

export function refreshFilterAction(filters) {
    return { type: REFRESH_FILTER, filters }
}