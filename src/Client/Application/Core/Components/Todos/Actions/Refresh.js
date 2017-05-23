import Events from './../Events';

const getAll = () => {
    return [{title:'test..', description:'testing rnd app'}, {title: 'rx-js', description:'rx js from microsoft'}, {title:'react',description:'from facebook'}];
};

export default stream => {
    stream.broadcast({...Events.Refresh, 
        payload: [...getAll(), {title:(new Date().toLocaleTimeString()), description:'sample..'}]});
};
