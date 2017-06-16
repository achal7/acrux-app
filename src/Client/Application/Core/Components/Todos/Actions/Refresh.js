import 'babel-polyfill';
import axios from 'axios';
import fetch from 'isomorphic-fetch';
import Messages from './../Messages';

const getAll = () => {
    return [{title:'test..', description:'testing rnd app'}, {title: 'rx-js', description:'rx js from microsoft'}, {title:'react',description:'from facebook'}];
};

let header = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
});

let requestHeader = {
    method: 'GET',
    'mode': 'no-cors',
    headers: header
};
let url = 'http://localhost:5000/api/data';

export default async stream => {
//    let res = await fetch(url, requestHeader)
//     .then(response => {
//         if (response.status >= 400) {
//             throw new Error("Bad response from server");
//         }
//         return response;
//     })
//     .then( data =>{ console.log('Response: ', data); return data;} )
//     .catch( e => console.log("Some error!!!", e));

//     let parsedRes = await console.log('Result: ', res);  

    // (async() => {
    //     try {
    //         var response = await fetch(url, requestHeader);
    //         var data = await response.text();
    //         console.log(data);
    //     } catch (e) {
    //         console.log("Booo", e)
    //     }})();

    // async function fetchAsync () {
    //         let response = await fetch(url, requestHeader);
    //         let data = await response.json();
    //         return data;
    // };

    // fetchAsync()
    //     .then(data => console.log(data))
    //     .catch(reason => console.log('Error: ', reason));

// fetch(url, requestHeader)
//       .done(result =>
//         result.text().done(text => console.log(text))
//       );

    // let req = axios.create({
    //     baseURL: 'http://localhost:5000',
    //     headers:{
    //         'Accept': 'application/json',
    //         'crossDomain': true,
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin':'*',}
    // });
    // req.get('/api/data')
    //     .then(response => {
    //         console.log(response);
    //     console.log(response.data);
    //     console.log(response.status);
    // });  
    stream.next({...Messages.Refresh, 
         payload: [...getAll(), {title:(new Date().toLocaleTimeString()), description:'sample..'}]});
};
