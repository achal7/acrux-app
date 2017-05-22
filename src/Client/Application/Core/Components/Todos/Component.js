import React from 'react';
import TodoComponent from './Views/TodoComponent';
import Component from './../../../Lib/Component';
import Refresh from './Actions/Refresh';

const actions = [{
    responseOfEvent: 'DoRefresh',
    action: Refresh,
    triggerEvent: 'refresh'
}];

const component = Component([actions]);

const module = {
    TodoList: () => component.createView(TodoComponent)
};

export default module;