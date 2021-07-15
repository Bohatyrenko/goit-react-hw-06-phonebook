import { combineReducers } from 'redux';
import action from './phonebook-actions';
import types from './phonebook-types';

const itemReducer = (state = [], action) => {
  return state;
};

const filterReducer = (state = '', action) => {
  return state;
};

export default combineReducers({
  itemReducer,
  filterReducer,
});

// const reducer = (state = initilState, action) => {
//   switch (action.type) {
//     case 'phoneBook/AddContact':
//       return [...action.payload, ...state];

//     default:
//       return state;
//   }
// };
