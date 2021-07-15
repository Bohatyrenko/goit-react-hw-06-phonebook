import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import phonebookReducer from './phonebook/phonebook-reducer';

const initilState = {
  contacts: [
    {
      name: '',
      number: '',
    },
  ],

  filter: '',
};

const reducer = (state = initilState, action) => {
  switch (action.type) {
    case 'phoneBook/AddContact':
      return [...action.payload, ...state];

    default:
      return state;
  }
};

// const rootReducer = combineReducers({
//   phoneBook: phonebookReducer,
// });

const store = createStore(reducer);

export default store;
