import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import EventsReducer from './reducer_events';

const rootReducer = combineReducers({
  event: EventsReducer,
  form: formReducer
});

export default rootReducer;
