
import {Container} from './App.styled';
import { PhonebookForm } from './Phonebook/PhonebookForm';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';



export function App () {


//   useEffect(() => {
//     const contacts = localStorage.getItem('contacts');
//     if (contacts) {
//       setContacts(JSON.parse(contacts));
//     }
//   }, []);
//   useEffect(() => {
//     if (contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }, [contacts]);
  




  
    return (
      <Container>
      <h1>Phonebook</h1>
        <PhonebookForm/>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList/>
        </Container>
    );
    }
