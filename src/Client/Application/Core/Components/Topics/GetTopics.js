import "isomorphic-fetch";
import Store from './Store.js';

const GetTopics = () => {
    

    var source = Rx.Observable.create(function (observer) {
        observer.next(data);
        observer.complete();
    });
    return map => source.subscribe(map);
};

export default store();