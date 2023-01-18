import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem,ContactBtn } from './ContactsList.styled';


export const ContactsList = ({ contacts, onDeleteContact}) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>  
                <p>{name}: {number}{' '}</p>
                <ContactBtn onClick={()=> onDeleteContact(id)}>delete</ContactBtn>
            </ContactItem>
        )
            )}
</ul>
)


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

    
