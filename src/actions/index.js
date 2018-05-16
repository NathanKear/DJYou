import axios from 'axios';

export const CREATE_EVENT = 'create_event';
export const JOIN_EVENT = 'join_event';

const ROUTE_URL = `http://localhost:51836/api`;

export function createEvent(callback) {
    const url = `${ROUTE_URL}/event`;
    console.log('url', url);
    const request = axios.post(url);

    request.then(({data}) => callback(data));

    return {
        type: CREATE_EVENT,
        payload: request
    };
}

export function joinEvent(code, callbackSuccess, callbackFail) {
    const url = `${ROUTE_URL}/event/${code}`;
    console.log('url', url);
    const request = axios.get(url);

    request.then(({data}) => {
        callbackSuccess(data);
    }).catch((error) => {
        callbackFail(error);
    });

    return {
        type: JOIN_EVENT,
        payload: request
    };
}