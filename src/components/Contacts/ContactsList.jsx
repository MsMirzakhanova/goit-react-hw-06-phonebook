import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ContactBtn } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {deleteContact} from "../redux/contacts.slice"


export const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
 
  return (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <p>{name}: {number}{' '}</p>
        <ContactBtn onClick={() => onDeleteContact(id)}>delete</ContactBtn>
      </ContactItem>
    )
    )}
    </ul>
  )
}


ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

    
