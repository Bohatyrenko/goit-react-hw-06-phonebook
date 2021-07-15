import shortid from 'shortid';

export const AddContact = ({ name, number }) => ({
  type: 'phoneBook/AddContact',
  payload: {
    contact: {
      name,
      number,
      id: shortid.generate(),
    },
  },
});

export const DeleteContact = value => ({
  type: 'phoneBook/DeleteContact',
  payload: value,
});
