import React from 'react';

import { ContactItem, ContactBtn } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../redux/contacts.slice"
import {getVisibleContacts} from "../redux/selectors"


export const ContactsList = () => {
  const filteredContacts = useSelector(getVisibleContacts);
const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
 
  return (
  <ul>
    {filteredContacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <p>{name}: {number}{' '}</p>
        <ContactBtn onClick={() => onDeleteContact(id)}>delete</ContactBtn>
      </ContactItem>
    )
    )}
    </ul>
  )
}




    
