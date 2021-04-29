export const FETCHING_START = 'FETCHING_START';
export const FETCHING_END = 'FETCHING_END';

export function fetchStartAction() {
    return { type: FETCHING_START, lastUpdated: Date.now() }
}

export function fetchEndAction() {
    return { type: FETCHING_END, lastUpdated: Date.now() }
}