import React from 'react';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';
import ViewAdapter from './ViewAdapter';
import ActionsChipset from './ActionsChipset';

//const commands = ['refresh'];

const component = commands => {
    
    const action$ = new Subject();
    const events = ['DoRefresh'];
    const ioActions = ViewAdapter(action$, events, ['refresh']);
    const chipset = ActionsChipset(action$, commands);
    return {
        createView: component => React.createElement(component, {actions:ioActions} ),
        chipset: chipset,
        ioAdapter: ioActions
    }
};

export default component;