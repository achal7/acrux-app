import React from 'react';
import TodoComponent from './Views/TodoComponent';
import Component from './../../../Lib/Component';
import Refresh from './Actions/Refresh';

const actions = [{
    name: 'DoRefresh',
    action: Refresh,
    triggerEvent: 'refresh'
}];

const component = Component(actions);
const ioEvents = [{ name: 'refresh', triggerEvent: 'DoRefresh'}];
const ioAdapter = component.createIOAdapter(ioEvents, ioEvents);

const module = {
    TodoList: () => component.createView(TodoComponent, ioAdapter)
};

export default module;