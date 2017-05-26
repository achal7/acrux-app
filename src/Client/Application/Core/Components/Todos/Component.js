import React from 'react';
import TodoComponent from './Views/TodoComponent';
import Component from './../../../Lib/Component';
import Refresh from './Actions/Refresh';
import Messages from './Messages';

const actions = [{ name:Messages.DoRefresh.name, action: Refresh}];
const component = Component(actions);
const viewEvents = [Messages.Refresh];
const ioEvents = [Messages.DoRefresh]
const ioAdapter = component.createIOAdapter(viewEvents, ioEvents);

const module = {
    TodoList: () => <TodoComponent actions={ioAdapter} />
};

export default module;