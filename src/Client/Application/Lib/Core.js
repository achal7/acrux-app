export const streamActionDispatcher = stream => (func) => (...args) => stream.next(func(...args));
export const makeCommand = event => payload => ({...event, payload: payload});
export const Event = { name: '', payload: undefined};