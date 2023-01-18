import { useState, useEffect } from 'react';
import {Container} from './App.styled';
import { PhonebookForm } from './Phonebook/PhonebookForm';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import toast, { Toaster } from 'react-hot-toast';

const shortid = require('shortid');


export function App () {

const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  }, []);
  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);
  
const formSubmitHandler = (name, number) => { 
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
const normalizeName = contact.name.toLowerCase();
const isNameInContact = contacts.find(
      contact => contact.name.toLowerCase() === normalizeName
);
    isNameInContact ? toast.success(`${contact.name} is already in contacts`) :
      setContacts((contacts) => [contact, ...contacts]);
  };
  

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id),
    )
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  }
  

  
    return (
      <Container>
      <h1>Phonebook</h1>
        <PhonebookForm onSubmit={formSubmitHandler}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact} 
          />
        <Toaster />
        </Container>
    );
    }
