import React from 'react';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';
import ViewAdapter from './ViewAdapter';
import Processor from './Processor';

const component = commands => {
    const action$ = new Subject();
    const chipset = Processor(action$, commands);
    return {
        createView: (component, ioAdapter) => React.createElement(component, {actions:ioAdapter} ),
        chipset: chipset,        
        createIOAdapter: events => ViewAdapter(action$, events, commands)
    }
};

export default component;