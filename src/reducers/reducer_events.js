import _ from 'lodash';
import { CREATE_EVENT, JOIN_EVENT } from '../actions';

export default function(state = {}, action) {

    console.log('action', action);

    switch (action.type) {
        case CREATE_EVENT:
        case JOIN_EVENT:
            return action.payload.data;
        default:
            return state;
    }
} 