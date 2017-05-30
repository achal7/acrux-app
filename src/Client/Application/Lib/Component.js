import React from 'react';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';
import DisplayAdapter from './DisplayAdapter';
import Chipset from './Chipset';

const component = commands => {
    const action$ = new Subject();
    //action$.subscribe(d => console.log('Traffic: ',d ));
    const chipset = Chipset(action$, commands);    
    return {
        createIOAdapter: (viewEvents, ioEvents)  => DisplayAdapter(action$, viewEvents, ioEvents)
    }
};

export default component;