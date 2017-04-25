import Rx from 'rxjs/Rx';

const StoreAgents = () => {
    var data = [
        {url:'rendering', name: 'Rendering with React'},
        {url:'components', name: 'Components'},
        {url:'props-v-state', name: 'Props v. State'}
    ];
    // var observers = [];
    var source = Rx.Observable.create(function (observer) {
        observer.next(data);
        // observers.push(observer);
        // var v = dataMapping(data);
        // broadCast(v, observers);
    });
    var interval = Rx.Observable.interval(1000);
    var result = interval.mergeMap(x =>
    x === 13 ?
        Rx.Observable.throw('Thirteens are bad') :
        Rx.Observable.of(data)
    );
    return map => result.subscribe(map);
};

export default StoreAgents();