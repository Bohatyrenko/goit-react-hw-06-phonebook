import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBookReducer from './phonebook/phonebook-reducer';

const rootReducer = {
  phoneBook: phoneBookReducer,
};

// const reducer = (state = initilState, action) => {
//   switch (action.type) {
//     case 'phoneBook/AddContact':
//       return [...action.payload, ...state];

//     default:
//       return state;
//   }
// };

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const initilState = {
//   phoneBook: {
//     items: [],
//     filter: '',
//   },
// };
