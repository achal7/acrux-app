import Messages from './../Messages';

const getAll = () => {
    return [{title:'test..', description:'testing rnd app'}, {title: 'rx-js', description:'rx js from microsoft'}, {title:'react',description:'from facebook'}];
};

export default stream => {
    stream.next({...Messages.Refresh, 
        payload: [...getAll(), {title:(new Date().toLocaleTimeString()), description:'sample..'}]});
};
