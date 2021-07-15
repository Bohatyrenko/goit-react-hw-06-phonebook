import shortid from 'shortid';
import types from './phonebook-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    item: {
      id: shortid.generate(),
      name,
      number,
    },
  },
});

const deleteContact = value => ({
  type: types.DELETE,
  payload: value,
});

export default { addContact, deleteContact };
