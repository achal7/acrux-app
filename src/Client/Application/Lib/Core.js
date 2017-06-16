import { Observable } from 'rxjs/Observable';
export const isObservable = obs => obs instanceof Observable;
export const log = console.log.bind(console);
//export const streamActionDispatcher = stream => (func) => (...args) => stream.next(func(...args));
export const streamActionDispatcher = stream => (func) => (...args) => {
const action = func.call(null, ...args);
  stream.next(action);
  if (isObservable(action.payload))
    action$.next(action.payload);
  return action;
};
export const makeCommand = event => payload => ({...event, payload: payload});
export const MessageType = {
    Data: 1,
    Action: 2
};

export const DataMessage = { name: '', type: MessageType.Data, payload: undefined};
export const ActionMessage = { name: '', type: MessageType.Action, action: undefined};
