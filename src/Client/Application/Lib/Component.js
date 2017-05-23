import React from 'react';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';
import ViewAdapter from './ViewAdapter';
import Processor from './Processor';

const component = commands => {
    const action$ = new Subject();
    action$.subscribe(d => console.log('Traffic: ',d ));
    action$.broadcast = event => action$.next(event);
    const chipset = Processor(action$, commands);
    return {
        createView: (component, ioAdapter) => React.createElement(component, {actions:ioAdapter} ),
        chipset: chipset,        
        createIOAdapter: (viewEvents, ioEvents)  => ViewAdapter(action$, viewEvents, ioEvents)
    }
};

export default component;