import axios from 'axios';

export const CREATE_EVENT = 'create_event';

const ROUTE_URL = `http://localhost:51836/api`;

export function createEvent(callback) {
    const url = `${ROUTE_URL}/event`;
    console.log('url', url);
    const request = axios.post(url)
    .then(({data}) => callback(data));

    return {
        type: CREATE_EVENT,
        payload: request
    };
}