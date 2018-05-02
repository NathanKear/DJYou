import _ from 'lodash';
import { CREATE_EVENT } from '../actions';

export default function(state = {}, action) {

    console.log('action', action);

    switch (action.type) {
        case CREATE_EVENT:
            return { ...state, event: action.payload };
        default:
            return state;
    }
} 