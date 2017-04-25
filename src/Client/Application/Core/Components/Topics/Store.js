import Rx from 'rxjs/Rx';
import StoreAgents from './StoreAgents.js';
window.Rx=Rx;
const dataMapping = data => data;
const broadCast = (data, observers) => observers.map(observer => observer.next(data));

const store = () => {
    var data = [];
    //var subscription = StoreAgents.subscribe(data => )
    var data = [
        {url:'rendering', name: 'Rendering with React'},
        {url:'components', name: 'Components'},
        {url:'props-v-state', name: 'Props v. State'}
    ];
    
    var observers = [];
    var source = Rx.Observable.create(function (observer) {
        //observer.next(data);
        observers.push(observer);
        // var v = dataMapping(data);
        // broadCast(v, observers);
    });
    var subscription = StoreAgents(data => {
        var v = dataMapping(data);
        broadCast(v, observers);
    });
    return map => source.subscribe(map);
};

export default store();