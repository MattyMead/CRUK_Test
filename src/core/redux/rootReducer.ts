import { combineReducers } from 'redux';
import { Reducer as mediaReducer } from 'modules/media';

const rootReducer = combineReducers
({
  media: mediaReducer
});

export default rootReducer;