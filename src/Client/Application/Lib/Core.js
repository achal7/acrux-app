export const streamActionDispatcher = stream => (func) => (...args) => stream.next(func(...args));
export const makeCommand = event => payload => ({...event, payload: payload});
export const MessageType = {
    Data: 1,
    Action: 2
};

export const DataMessage = { name: '', type: MessageType.Data, payload: undefined};
export const ActionMessage = { name: '', type: MessageType.Action, action: undefined};
