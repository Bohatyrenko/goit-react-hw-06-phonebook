import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  phoneBook: {
    contacts: [],
    filter: '',
  },
});

const store = createStore(reducer);

export default store;
