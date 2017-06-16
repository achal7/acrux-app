import React from 'react';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';
import * as Core from './Core';
import DisplayAdapter from './DisplayAdapter';
import Chipset from './Chipset';

const component = commands => {
    const action$ = new Subject();
    const actionDispatcher = Core.streamActionDispatcher(action$);
    var component = {};
    Object.keys(commands).map(key => component[key] = actionDispatcher(Core.makeCommand(commands[key])));

    //action$.subscribe(d => console.log('Traffic: ',d ));
    const chipset = Chipset(action$, commands);    
    return {
        createIOAdapter: (viewEvents, ioEvents) => DisplayAdapter(action$, viewEvents, ioEvents)
    }
};

export default component;