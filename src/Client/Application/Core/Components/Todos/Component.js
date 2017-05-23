import React from 'react';
import TodoComponent from './Views/TodoComponent';
import Component from './../../../Lib/Component';
import Refresh from './Actions/Refresh';
import Events from './Events';

const actions = [{...Events.DoRefresh, action: Refresh}];
const component = Component(actions);
const viewEvents = [Events.Refresh];
const ioEvents = actions.map(action => action);
const ioAdapter = component.createIOAdapter(viewEvents, ioEvents);

const module = {
    TodoList: () => component.createView(TodoComponent, ioAdapter)
};

export default module;